import { connect } from 'react-redux'

import CoworkCreate from '../components/CoworkCreate'

import { getAuthUser } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state)
})

export default connect(
	mapStateToProps
)(CoworkCreate)
