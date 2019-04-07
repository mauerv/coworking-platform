import { connect } from 'react-redux'

import App from '../components/App'

import { getAuthUser, getFirebase } from '../selectors'

import { doAuthUserPresent, doAuthUserMissing } from '../actions'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	firebase: getFirebase(state)
})

const ConnectedApp = connect(
	mapStateToProps,
	{ authUserPresent: doAuthUserPresent, authUserMissing: doAuthUserMissing}	
)(App)

export default ConnectedApp