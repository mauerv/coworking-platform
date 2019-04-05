import { AUTH_USER_PRESENT, AUTH_USER_MISSING } from '../constants/actionTypes'

export const authPresent = authUser => ({
	type: AUTH_USER_PRESENT,
	payload: authUser
})

export const authMissing = () => ({
	type: AUTH_USER_MISSING
})