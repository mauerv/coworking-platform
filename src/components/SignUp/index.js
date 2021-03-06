import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../../firebase'

import * as ROUTES from '../../constants/routes'

import { 
	Alert, 
	FormWrapper,
	FormInput,
	FormSubmit,
	FormTitle
} from '../../theme/utilComponents'

export default () => (
	<div>
		<FormTitle>SignUp</FormTitle>
		<SignUpForm />
	</div>
)

const INITIAL_STATE = {
	username: '',
	email: '',
	passwordOne: '',
	passwordTwo: '',
	error: null
}

class SignUpFormBase extends Component {
	state = { ...INITIAL_STATE }

	onSubmit = event => {
		event.preventDefault()

		const { username, email, passwordOne } = this.state

		this.props.firebase
			.doCreateUserWithEmailAndPassword(email, passwordOne)
			.then(authUser => {
				return this.props.firebase
					.user(authUser.user.uid)
					.set({
						username,
						email,
						coworks: []
					})
			})
			.then(() => {
				return this.props.firebase.doSendEmailVerification()
			})
			.then(() => {
				this.setState({ ...INITIAL_STATE })
				this.props.history.push(ROUTES.HOME)
			})
			.catch(error => {
				this.setState({ error })
			})
	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const {
			username,
			email,
			passwordOne,
			passwordTwo,
			error
		} = this.state 

		const isInvalid =
			passwordOne !== passwordTwo ||
			passwordOne === '' ||
			email === '' ||
			username === ''

		return (
			<FormWrapper onSubmit={this.onSubmit}>
				<FormInput
					name="username"
					value={username}
					onChange={this.onChange}
					type="text"
					placeholder="Full Name"
				/>
				<FormInput
					name="email"
					value={email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
				/>
				<FormInput
					name="passwordOne"
					value={passwordOne}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
				/>
				<FormInput
					name="passwordTwo"
					value={passwordTwo}
					onChange={this.onChange}
					type="password"
					placeholder="Confirm Password"
				/>
				<FormSubmit disabled={isInvalid} type="submit">Sign Up</FormSubmit>

				{error && <Alert>{error.message}</Alert>}
			</FormWrapper>
		)	
	}
}

const SignUpLink = () => (
	<p>
		Dont have an account? <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
	</p>
)

const SignUpForm = compose(
	withFirebase,
	withRouter
)(SignUpFormBase)

export { SignUpForm, SignUpLink }