import { firebase } from '../firebase'
import { getIdListFromObj } from '../util/helperFunctions'

import { 
	AUTH_USER_SET,  
	COWORK_LIST_SET,
	USER_DATA_SET,
	AMMENITY_LIST_SET
} from '../constants/actionTypes'

export const doAuthUserSet = authUser => ({
	type: AUTH_USER_SET,
	payload: authUser
})

export const doUserDataFetch = id => async dispatch => 
	// Fetch and set user data.
	firebase.user(id).on('value', async snapshot => {
		const user = snapshot.val()
		dispatch(doUserDataSet(user))
		// Fetch and set user coworks data.
		const coworkIds = getIdListFromObj(user.coworks)
		const coworks = await Promise.all(coworkIds.map(id => firebase.cowork(id).once('value')))
	  const coworksDataList = coworks.map(cowork => cowork.val())
	  const coworksData = {}
  	for (var i = coworkIds.length - 1; i >= 0; i--) {
  		coworksData[coworkIds[i]] = coworksDataList[i]
  	}
  	dispatch(doCoworkListSet(coworksData))
	}) 

export const doUserDataSet = user => ({
	type: USER_DATA_SET,
	payload: user
})

export const doCoworkListFetch = () => async dispatch => 
	firebase.coworks().on('value', snapshot => {
		dispatch(doCoworkListSet(snapshot.val()))
	})

export const doCoworkListSet = coworks => ({
	type: COWORK_LIST_SET,
	payload: coworks
})

export const doAmmenityListFetch = () => async dispatch => {
	firebase.ammenities().on('value', snapshot => {
		dispatch(doAmmenityListSet(snapshot.val()))
	})
}

export const doAmmenityListSet = ammenities => ({
	type: AMMENITY_LIST_SET,
	payload: ammenities
})