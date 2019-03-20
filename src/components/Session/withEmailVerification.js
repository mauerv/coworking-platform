import React from 'react'

import { withFirebase } from '../Firebase'
import { connect } from 'react-redux'

const needsEmailVerification = authUser => 
	authUser &&
	!authUser.emailVerified &&
	authUser.providerData
		.map(provider => provider.providerId)
		.includes('password')

const withEmailVerification = Component => {
	class WithEmailVerification extends React.Component {
		constructor(props) {
			super(props) 

			this.state = { isSent: false }
		}

		onSendEmailVerification = () => {
			this.props.firebase
				.doSendEmailVerification()
				.then(() => this.setState({ isSent: true }))
		}

		render() {
			const { authUser } = this.props
			console.log(authUser)

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

								<button
									type="button"
									onClick={this.onSendEmailVerification}
									disabled={this.state.isSent}
								>
									Send confirmation E-Mail
								</button>
							</div>
						) : (
							<Component {...this.props} />
						)
					
			)
		}
	}

	const mapStateToProps = state => ({
		authUser: state.authUser
	})

	const ConnectedWithEmailVerification = connect(mapStateToProps)(WithEmailVerification)

	return withFirebase(ConnectedWithEmailVerification)
}

export default withEmailVerification