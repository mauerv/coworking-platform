import React, { Component } from 'react'

import { PasswordForgetForm } from '../PasswordForget'
import PasswordChangeForm from '../PasswordChange'
import List from '../List'
import FigureWithButton from '../FigureWithButton'

import * as ROUTES from '../../constants/routes'

import { getIdListFromObj } from '../../util/helperFunctions'

import { 
	FormTitle,
	PasswordManageWrapper 
} from './styles'

export default class Account extends Component {
	componentDidMount() {
		this.props.firebase.user(this.props.authUser.uid).on('value', snapshot => {
			this.props.onUserDataSet(snapshot.val())
			const coworkIds = getIdListFromObj(snapshot.val().coworks)
			Promise.all(
		    coworkIds.map(id => this.props.firebase.cowork(id).once('value'))
		  ).then(coworks => {
		  	const coworksDataList = coworks.map(cowork => cowork.val())
		  	console.log(coworksDataList)
		  	const coworksData = {}
		  	for (var i = coworkIds.length - 1; i >= 0; i--) {
		  		coworksData[coworkIds[i]] = coworksDataList[i]
		  	}
		  	console.log('Coworks', coworksData)
		  	this.props.onCoworkListSet(coworksData)
		  })
		})
	}

	componentWillUnmount() {
		this.props.firebase.user(this.props.authUser.uid).off()
	}

	render() {
		const { user, history } = this.props

		return (
			<div> {/* TODO: This ternary doesn't work. */}
				{user.coworks !== undefined ? (
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
