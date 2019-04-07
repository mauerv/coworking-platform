import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { withAuthorization, withEmailVerification } from '../components/Session'

import Account from '../components/Account'

import { doUserDataShow } from '../actions'

import { getAuthUser, getUser } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	user: getUser(state)
})

const ConnectedAccount = connect(
	mapStateToProps,
	{ onUserDataShow: doUserDataShow }
)(Account)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition),
	withRouter
)(ConnectedAccount)
