import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import List from '../List'
import FigureWithButton from '../FigureWithButton'

import * as ROUTES from '../../constants/routes'

import { 
	FormTitle,
	PasswordManageWrapper 
} from './styles'

export default class AccountPage extends Component {
	render() {
		const { user, history } = this.props

		return (
			<div>
				{false ? (
					<List listTitle={"My Coworks"} items={user.coworks} />
				) : (
					<FigureWithButton 
						title="My Coworks"
						text="You don't seem to have any cowork just yet."
						onClick={() => history.push(ROUTES.CREATE)}
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
	}
}