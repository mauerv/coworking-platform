import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { withFirebase } from '../../firebase'

import * as ROUTES from '../../constants/routes'

import { 
	Alert, 
	FormWrapper,
	FormInput,
	FormSubmit,
	FormTitle
} from './styles'

export default () => (
	<div>
		<FormTitle>PasswordForget</FormTitle>
		<PasswordForgetForm />
	</div>
)

const INITIAL_STATE = {
	email: '',
	error: null
}

class PasswordForgetFormBase extends Component {
	state = { ...INITIAL_STATE }

	onSubmit = event => {
		const { email } = this.state

		this.props.firebase
			.doPasswordReset(email)
			.then(() => {
				this.setState({ ...INITIAL_STATE })
			})
			.catch(error => {
				this.setState({ error })
			})
		event.preventDefault()
 	}

	onChange = event => {
		this.setState({ [event.target.name]: event.target.value })
	}

	render() {
		const { email, error } = this.state

		const isInvalid = email === ''

		return (
			<FormWrapper onSubmit={this.onSubmit}>
				<FormInput
					name="email"
					value={this.state.email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
				/>
				<FormSubmit disabled={isInvalid} type="submit">
					Reset My Password
				</FormSubmit>

				{error && <Alert>{error.message}</Alert>}
			</FormWrapper>
		)
	}
}

const PasswordForgetLink = () => (
	<p>
		<Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
	</p>
)

const PasswordForgetForm = withFirebase(PasswordForgetFormBase)

export { PasswordForgetForm, PasswordForgetLink }