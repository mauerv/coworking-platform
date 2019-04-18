import React, { Component } from 'react'

import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import List from '../List'
import FigureWithButton from '../FigureWithButton'

import * as ROUTES from '../../constants/routes'

import { 
	FormTitle,
	PasswordManageWrapper 
} from './styles'

export default class Account extends Component {
	componentDidMount() {
		this.props.onUserDataFetch(this.props.authUser.uid)
	}

	componentWillUnmount() {
		this.props.firebase.user(this.props.authUser.uid).off()
	}

	onClickDelete = (coworkId, userId) => this.props.onCoworkDelete(coworkId, userId)

	onClickUpdate = coworkId => this.props.history.push(`${ROUTES.COWORKS}/${coworkId}/update`) 

	render() {
		const { user, history } = this.props

		return (
			<div> 
				{user.coworks !== undefined &&
				 user.coworks.length !== 0 ? (
					<List 
						listTitle={"My Coworks"} 
						items={user.coworks} 
						onClickDelete={this.onClickDelete}
						onClickUpdate={this.onClickUpdate}
					/>
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
