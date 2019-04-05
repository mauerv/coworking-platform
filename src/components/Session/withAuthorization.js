import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getFirebase, getAuthUser } from '../../selectors'
import * as ROUTES from '../../constants/routes'

const withAuthorization = condition => Component => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			this.listener = this.props.firebase.onAuthUserListener(
				authUser => {
					if (!condition(authUser)) {
						this.props.history.push(ROUTES.SIGN_IN)
					}
				},
				() => this.props.history.push(ROUTES.SIGN_IN)
			)
		}

		componentWillUnmount() {
			this.listener()
		}

		render() {
			if (!condition(this.props.authUser)) {
				return null
			}

			return (
					 <Component {...this.props} /> 
			)
		}
	}

	const mapStateToProps = state => ({
		authUser: getAuthUser(state),
		firebase: getFirebase(state)
	})

	const ConnectedWithAuthorization = connect(mapStateToProps)(WithAuthorization)

	return withRouter(ConnectedWithAuthorization)
}

export default withAuthorization