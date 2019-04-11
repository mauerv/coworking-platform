import { connect } from 'react-redux'

import CoworkCreate from '../components/CoworkCreate'

import { getAuthUser, getAmmenities } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	ammenities: getAmmenities(state)
})

export default connect(
	mapStateToProps
)(CoworkCreate)
