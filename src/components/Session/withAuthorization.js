import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { withFirebase } from '../Firebase'
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
		authUser: state.authUser
	})

	const ConnectedWithAuthorization = connect(mapStateToProps)(WithAuthorization)

	return compose(
		withRouter,
		withFirebase
	)(ConnectedWithAuthorization)
}

export default withAuthorization