import { connect } from 'react-redux'

import App from '../components/App'

import { getAuthUser, getFirebase } from '../selectors'

import { doAuthUserSet } from '../actions'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	firebase: getFirebase(state)
})

const ConnectedApp = connect(
	mapStateToProps,
	{ onSetAuthUser: doAuthUserSet }	
)(App)

export default ConnectedApp