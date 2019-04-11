import { 
	AUTH_USER_SET,  
	COWORK_LIST_SET,
	COWORK_SET,
	USER_DATA_SET,
	AMMENITY_LIST_SET
} from '../constants/actionTypes'

export const doAuthUserSet = authUser => ({
	type: AUTH_USER_SET,
	payload: authUser
})

export const doCoworkListSet = coworks => ({
	type: COWORK_LIST_SET,
	payload: coworks
})

export const doCoworkSet = cowork => ({
	type: COWORK_SET,
	payload: cowork
})

export const doUserDataSet = user => ({
	type: USER_DATA_SET,
	payload: user
})

export const doAmmenityListSet = ammenities => ({
	type: AMMENITY_LIST_SET,
	payload: ammenities
})