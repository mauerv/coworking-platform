import { firebase } from '../firebase'
import { getIdListFromObj } from '../util/helperFunctions'

import { 
	AUTH_USER_SET,  
	COWORK_LIST_SET,
	USER_DATA_SET,
	AMMENITY_LIST_FETCH
} from '../constants/actionTypes'

export const doAuthUserSet = authUser => ({
	type: AUTH_USER_SET,
	payload: authUser
})

export const doCoworkListSet = coworks => ({
	type: COWORK_LIST_SET,
	payload: coworks
})

export const doUserDataFetch = id => async dispatch => 
	firebase.user(id).on('value', async snapshot => {
		const user = snapshot.val()
		dispatch(doUserDataSet(user))
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

export const doAmmenityListFetch = () => async dispatch => {
	firebase.ammenities().on('value', snapshot => {
		dispatch({
			type: AMMENITY_LIST_FETCH,
			payload: snapshot.val()
		})
	})
}
