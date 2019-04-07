import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../../firebase'

import { SignUpLink } from '../SignUp'
import { PasswordForgetLink } from '../PasswordForget'

import * as ROUTES from '../../constants/routes'

import { 
	Alert, 
	FormWrapper,
	FormInput,
	FormSubmit,
	FormTitle,
	ContentWrapper
} from './styles'

export default () => (
	<ContentWrapper>
		<FormTitle>Sign In</FormTitle>
		<SignInForm />
		<PasswordForgetLink />
		<SignUpLink />
	</ContentWrapper>
)

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null
}

class SignInFormBase extends Component {
	state = { ...INITIAL_STATE }

	onSubmit = event => {
		event.preventDefault()

		const { email, password } = this.state

		this.props.firebase
			.doSignInWithEmailAndPassword(email, password)
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
		const { email, password, error } = this.state

		const isInvalid = password === '' || email === '' 

		return (
			<FormWrapper onSubmit={this.onSubmit}>
				<FormInput
					name="email"
					value={email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
				/>
				<FormInput
					name="password"
					value={password}
					onChange={this.onChange}
					type="password"
					placeholder="Password"
				/>
				<FormSubmit disabled={isInvalid} type="submit">
					Sign In
				</FormSubmit>
				{error && <Alert>{error.message}</Alert>}
			</FormWrapper>
		)
	}
}

const SignInForm = compose(
	withFirebase,
	withRouter
)(SignInFormBase)

export { SignInForm }