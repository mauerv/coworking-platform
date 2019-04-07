import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { 
	withAuthorization, 
	withEmailVerification,
	userIsAuthenticated 
} from '../components/Session'

import Account from '../components/Account'

import { doUserDataShow } from '../actions'

import { getAuthUser, getUser } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	user: getUser(state)
})

export default compose(
	withEmailVerification,
	withAuthorization(userIsAuthenticated),
	withRouter,
  connect(
		mapStateToProps,
		{ onUserDataShow: doUserDataShow }
	)
)(Account)
