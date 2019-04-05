import { AUTH_USER_PRESENT, AUTH_USER_MISSING } from '../constants/actionTypes'

export const doAuthUserPresent = authUser => ({
	type: AUTH_USER_PRESENT,
	payload: authUser
})

export const doAuthUserMissing = () => ({
	type: AUTH_USER_MISSING
})