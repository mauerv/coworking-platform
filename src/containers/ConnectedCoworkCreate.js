import { connect } from 'react-redux'

import CoworkCreate from '../components/CoworkCreate'

import { getAuthUser, getAmmenities } from '../selectors'
import { doCoworkListSet, doUserCoworkAdd } from '../actions'

const mapStateToProps = state => ({
	authUser: getAuthUser(state),
	ammenities: getAmmenities(state)
})

export default connect(
	mapStateToProps,
	{ 
		onCoworkListSet: doCoworkListSet,
		onUserCoworkAdd: doUserCoworkAdd 
	}
)(CoworkCreate)
