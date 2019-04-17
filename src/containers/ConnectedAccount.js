import { connect } from 'react-redux'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'

import { 
	withAuthorization, 
	withEmailVerification,
	userIsAuthenticated 
} from '../session'

import Account from '../components/Account'

import { getAuthUser, getUser } from '../selectors'
import { doUserDataFetch } from '../actions'

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
		{ onUserDataFetch: doUserDataFetch }
	)
)(Account)
