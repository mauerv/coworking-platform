import { connect } from 'react-redux'

import App from '../components/App'

import { getAuthUser, getFirebase } from '../selectors'

import { doAuthUserPresent, doAuthUserMissing } from '../actions'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	firebase: getFirebase(state)
})

const mapDispatchToProps = dispatch => ({
	authUserPresent: authUser => dispatch(doAuthUserPresent(authUser)),
	authUserMissing: () => dispatch(doAuthUserMissing())
})

const ConnectedApp = connect(
	mapStateToProps,
	mapDispatchToProps	
)(App)

export default ConnectedApp