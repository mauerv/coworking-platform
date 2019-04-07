import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'

import { withFirebase } from '../firebase'
 
import { getAuthUser } from '../selectors'

import * as ROUTES from '../constants/routes'

export default condition => Component => {
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
		authUser: getAuthUser(state)
	})

	return compose(
		withFirebase,
		withRouter,
		connect(mapStateToProps)
	)(WithAuthorization)
}
