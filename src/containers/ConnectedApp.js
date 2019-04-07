import { connect } from 'react-redux'

import App from '../components/App'

import { getAuthUser } from '../selectors'
import { doAuthUserSet } from '../actions'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
})

export default connect(
	mapStateToProps,
	{ onAuthUserSet: doAuthUserSet }	
)(App)
