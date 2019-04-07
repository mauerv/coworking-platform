import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { withAuthorization, withEmailVerification } from '../components/Session'

import AccountPage from '../components/Account'

import { doUserDataShow } from '../actions'

import { getAuthUser, getUser } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	user: getUser(state)
})

const ConnectedAccountPage = connect(
	mapStateToProps,
	{ onUserDataShow: doUserDataShow }
)(AccountPage)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition),
	withRouter
)(ConnectedAccountPage)
