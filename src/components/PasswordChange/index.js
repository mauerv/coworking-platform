import React, { Component } from 'react'

import { connect } from 'react-redux'

import { 
	Alert, 
	FormWrapper,
	FormInput,
	FormSubmit
} from './styles'

const INITIAL_STATE = {
	passwordOne: '',
	passwordTwo: '',
	error: null
}

class BasePasswordChangeForm extends Component {
	constructor(props) {
		super(props)

		this.state = { ...INITIAL_STATE }
	}

	onSubmit = event => {
		const { passwordOne } = this.state

		this.props.firebase
			.doPasswordUpdate(passwordOne)
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
		const { passwordOne, passwordTwo, error } = this.state

		const isInvalid = 
			passwordOne !== passwordTwo || passwordOne === ''
		
		return (
      <FormWrapper onSubmit={this.onSubmit}>
        <FormInput
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="New Password"
        />
        <FormInput
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm New Password"
        />
        <FormSubmit disabled={isInvalid} type="submit">
          Change My Password
        </FormSubmit>

        {error && <Alert>{error.message}</Alert>}
      </FormWrapper>
		)
	}
}

const mapStateToProps = state => ({
	firebase: state.firebase
})

export default connect(mapStateToProps)(BasePasswordChangeForm)