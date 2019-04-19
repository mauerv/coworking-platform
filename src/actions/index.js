import { firebase } from '../firebase'
import { getIdListFromObj } from '../util/helperFunctions'

import { 
	AUTH_USER_SET,  
	USER_COWORK_ADD,
	COWORK_LIST_SET,
	USER_DATA_SET,
	AMMENITY_LIST_SET,
	COWORK_DELETE
} from '../constants/actionTypes'

export const doAuthUserSet = authUser => ({
	type: AUTH_USER_SET,
	payload: authUser
})

export const doUserCoworkAdd = id => ({
	type: USER_COWORK_ADD,
	payload: id
})

export const doUserDataFetch = id => async dispatch => 
	firebase.user(id).on('value', async snapshot => {
		const user = snapshot.val()
		dispatch(doUserDataSet(user))
		const coworkIds = getIdListFromObj(user.coworks)
		if (coworkIds.length > 0) {
			const coworks = await Promise.all(coworkIds.map(id => firebase.cowork(id).once('value')))
		  const coworksDataList = coworks.map(cowork => cowork.val())
		  const coworksData = {}
	  	for (var i = coworkIds.length - 1; i >= 0; i--) {
	  		coworksData[coworkIds[i]] = coworksDataList[i]
	  	}
	  	dispatch(doCoworkListSet(coworksData))
		}
	}) 

export const doUserDataSet = user => ({
	type: USER_DATA_SET,
	payload: user
})

export const doCoworkDataFetch = id => async dispatch => {
	const coworkData = (await firebase.cowork(id).once('value')).val()
	dispatch(doCoworkListSet({ [id]: coworkData }))
}

export const doCoworkListFetch = () => async dispatch => 
	firebase.coworks().on('value', snapshot => {
		dispatch(doCoworkListSet(snapshot.val()))
	})

export const doCoworkListSet = coworks => ({
	type: COWORK_LIST_SET,
	payload: coworks
})

export const doCoworkDelete = (coworkId, userId) => dispatch => 
	Promise.all([
		firebase.cowork(coworkId).remove(),
		firebase.user(userId).child('coworks').orderByValue().equalTo(coworkId)
			.once('value', snapshot => snapshot.forEach(child => child.ref.remove()))
	]).then(() => dispatch({
		type: COWORK_DELETE,
		payload: coworkId
	}))

export const doAmmenityListFetch = () => async dispatch => {
	firebase.ammenities().on('value', snapshot => {
		dispatch(doAmmenityListSet(snapshot.val()))
	})
}

export const doAmmenityListSet = ammenities => ({
	type: AMMENITY_LIST_SET,
	payload: ammenities
})