import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { connect } from 'react-redux'

import * as ROUTES from '../../constants/routes'

const PasswordForgetPage = () => (
	<div>
		<h3>PasswordForget</h3>
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
			<form onSubmit={this.onSubmit}>
				<input
					name="email"
					value={this.state.email}
					onChange={this.onChange}
					type="text"
					placeholder="Email Address"
				/>
				<button disabled={isInvalid} type="submit">
					Reset My Password
				</button>

				{error && <p>{error.message}</p>}
			</form>
		)
	}
}

const PasswordForgetLink = () => (
	<p>
		<Link to={ROUTES.PASSWORD_FORGET}>Forgot Password</Link>
	</p>
)

const mapStateToProps = state => ({
	firebase: state.firebase
})

const PasswordForgetForm = connect(mapStateToProps)(PasswordForgetFormBase)

export default PasswordForgetPage

export { PasswordForgetForm, PasswordForgetLink }