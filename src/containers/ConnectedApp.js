import { connect } from 'react-redux'

import App from '../components/App'

import { getAuthUser } from '../selectors'
import { doAuthUserSet, doAmmenityListSet } from '../actions'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
})

export default connect(
	mapStateToProps,
	{ 
		onAuthUserSet: doAuthUserSet,
		onAmmenityListSet: doAmmenityListSet 
	}	
)(App)
