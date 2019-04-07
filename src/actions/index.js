import { 
	AUTH_USER_SET,  
	COWORK_LIST_UPDATE,
	USER_DATA_SHOW
} from '../constants/actionTypes'

export const doAuthUserSet = authUser => ({
	type: AUTH_USER_SET,
	payload: authUser
})

export const doCoworkListUpdate = coworks => ({
	type: COWORK_LIST_UPDATE,
	payload: coworks
})

export const doUserDataShow = user => ({
	type: USER_DATA_SHOW,
	payload: user
})