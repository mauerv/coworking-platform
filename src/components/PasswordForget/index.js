import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getFirebase } from '../../selectors'

import * as ROUTES from '../../constants/routes'

import { 
	Alert, 
	FormWrapper,
	FormInput,
	FormSubmit,
	FormTitle
} from './styles'

const PasswordForgetPage = () => (
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
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

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

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const PasswordForgetForm = connect(mapStateToProps)(PasswordForgetFormBase)

export default PasswordForgetPage

export { PasswordForgetForm, PasswordForgetLink }