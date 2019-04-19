import { connect } from 'react-redux'

import CoworkUpdate from '../components/CoworkUpdate'

import { 
	getAuthUser, 
	getAmmenities, 
	getCowork,
	getCoworkUpdateInitVal 
} from '../selectors'
import { 
	doCoworkListSet, 
	doUserCoworkAdd,
	doCoworkDataFetch 
} from '../actions'

const mapStateToProps = (state, ownProps) => {
	const cowork = getCowork(state, ownProps.match.params.cowork_id)
	return {
		authUser: getAuthUser(state),
		ammenities: getAmmenities(state),
		cowork: cowork,
		initialValues: getCoworkUpdateInitVal(state, cowork)
	}
}

export default connect(
	mapStateToProps,
	{ 
		onCoworkListSet: doCoworkListSet,
		onUserCoworkAdd: doUserCoworkAdd,
		onCoworkDataFetch: doCoworkDataFetch 
	}
)(CoworkUpdate)
