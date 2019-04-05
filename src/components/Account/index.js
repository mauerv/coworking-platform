import React from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'

import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import List from '../List'
import FigureWithButton from '../FigureWithButton'

import { coworks } from '../../util/dummyData'

import { 
	FormTitle,
	PasswordManageWrapper 
} from './styles'

const AccountPage = () => (
	<div>
		{true ? (
			<List listTitle={"My Coworks"} items={coworks} />
		) : (
			<FigureWithButton 
				title="My Coworks"
				text="You don't seem to have any cowork just yet."
				onClick={() => ''}
			/>
		)}
		<PasswordManageWrapper>
			<div>
				<FormTitle>Forgot Password</FormTitle>
				<PasswordForgetForm />
			</div>
			<div>
				<FormTitle>Change Password</FormTitle>
				<PasswordChangeForm />
			</div>
		</PasswordManageWrapper>
	</div>
)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(AccountPage)