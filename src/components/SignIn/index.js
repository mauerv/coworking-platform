import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFirebase } from '../../selectors'

import { SignUpLink } from '../SignUp'
import { PasswordForgetLink } from '../PasswordForget'

import { 
	Alert, 
	FormWrapper,
	FormInput,
	FormSubmit,
	FormTitle,
	ContentWrapper
} from './styles'

import * as ROUTES from '../../constants/routes'

const SignInPage = () => (
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
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

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

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const ConnectedSignInForm = connect(mapStateToProps)(SignInFormBase)
const SignInForm = withRouter(ConnectedSignInForm)

export default SignInPage

export { SignInForm }