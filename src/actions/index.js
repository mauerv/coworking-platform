import { 
	AUTH_USER_PRESENT, 
	AUTH_USER_MISSING, 
	COWORK_LIST_UPDATE
} from '../constants/actionTypes'

export const doAuthUserPresent = authUser => ({
	type: AUTH_USER_PRESENT,
	payload: authUser
})

export const doAuthUserMissing = () => ({
	type: AUTH_USER_MISSING
})

export const doCoworkListUpdate = coworks => ({
	type: COWORK_LIST_UPDATE,
	payload: coworks
})