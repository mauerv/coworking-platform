import React from 'react'
import { compose } from 'recompose'

import {
	withAuthorization, 
	withEmailVerification 
} from '../Session'
import { coworks } from '../../util/dummyData'

import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import List from '../List'
import FigureWithButton from '../FigureWithButton'

import { FormTitle } from './styles'

const AccountPage = () => (
	<div>
		<div>
			<h1>My Coworks</h1>
			<List items={coworks} />
		</div>
		<FigureWithButton 
			title="My Coworks"
			text="You don't seem to have any cowork just yet."
			onClick={() => ''}
		/>
		<div>
			<FormTitle>Forgot Password</FormTitle>
			<PasswordForgetForm />
			<FormTitle>Change Password</FormTitle>
			<PasswordChangeForm />
		</div>
	</div>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(AccountPage)