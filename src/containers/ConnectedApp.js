import { connect } from 'react-redux'
import { authPresent, authMissing } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({
	authUser: state.authUser,
	firebase: state.firebase
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