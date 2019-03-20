import React from 'react'
import { compose } from 'recompose'

import {
	withAuthorization, 
	withEmailVerification 
} from '../Session'
import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'

const AccountPage = ({ authUser }) => (
	<div>
		<h1>Account: {authUser.email}</h1>
		<PasswordForgetForm />
		<PasswordChangeForm />
	</div>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(AccountPage)