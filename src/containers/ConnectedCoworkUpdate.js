import { connect } from 'react-redux'

import CoworkUpdate from '../components/CoworkUpdate'

import { getAuthUser, getAmmenities, getCowork } from '../selectors'
import { 
	doCoworkListSet, 
	doUserCoworkAdd,
	doCoworkDataFetch 
} from '../actions'



const mapStateToProps = (state, ownProps) => {
	const cowork = getCowork(state, ownProps.match.params.cowork_id)
	return ({
		authUser: getAuthUser(state),
		ammenities: getAmmenities(state),
		initialValues: {
			coworkName: cowork.coworkName,
			coworkLocation: cowork.coworkLocation,
			smallDescription: cowork.smallDescription,
			description: cowork.description,
			openingWeekday: cowork.openingWeekday,
			openingWeekend: cowork.openingWeekend
		}
	})
}

export default connect(
	mapStateToProps,
	{ 
		onCoworkListSet: doCoworkListSet,
		onUserCoworkAdd: doUserCoworkAdd,
		onCoworkDataFetch: doCoworkDataFetch 
	}
)(CoworkUpdate)
