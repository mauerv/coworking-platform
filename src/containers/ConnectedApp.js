import { connect } from 'react-redux'
import { authPresent, authMissing } from '../actions'
import { getAuthUser, getFirebase } from '../selectors'
import App from '../components/App'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	firebase: getFirebase(state)
})

const mapDispatchToProps = dispatch => ({
	authUserPresent: authUser => dispatch(authPresent(authUser)),
	authUserMissing: () => dispatch(authMissing())
})

const ConnectedApp = connect(
	mapStateToProps,
	mapDispatchToProps	
)(App)

export default ConnectedApp