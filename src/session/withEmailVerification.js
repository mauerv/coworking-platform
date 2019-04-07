import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'

import { withFirebase } from '../firebase'

import { getAuthUser } from '../selectors'

import { MainButton } from './styles'

const needsEmailVerification = authUser => 
	authUser &&
	!authUser.emailVerified &&
	authUser.providerData
		.map(provider => provider.providerId)
		.includes('password')

export default Component => {
	class WithEmailVerification extends React.Component {
		state = { isSent: false }

		onSendEmailVerification = () => {
			this.props.firebase
				.doSendEmailVerification()
				.then(() => this.setState({ isSent: true }))
		}

		render() {
			const { authUser } = this.props

			return (
					 needsEmailVerification(authUser) ? (
							<div>
								{this.state.isSent ? (
									<p>
										E-Mail confirmation sent: Check your E-Mails.
									</p>
								) : (
									<p>
										Verify your E-Mail. Check your E-Mails for a confirmation.
										Or send another confirmation E-Mail.
									</p>
								)}

								<MainButton
									type="button"
									onClick={this.onSendEmailVerification}
									disabled={this.state.isSent}
								>
									Send confirmation E-Mail
								</MainButton>
							</div>
						) : (
							<Component {...this.props} />
						)
					
			)
		}
	}

	const mapStateToProps = state => ({
		authUser: getAuthUser(state)
	})

	return compose(
		withFirebase,
		connect(mapStateToProps)
	)(WithEmailVerification)
}
