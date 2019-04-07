import { connect } from 'react-redux'

import Navigation from '../components/Navigation'

import { getAuthUser } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state)
})

export default connect(mapStateToProps)(Navigation)