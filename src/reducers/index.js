import { AUTH_USER_PRESENT, AUTH_USER_MISSING } from '../constants/actions'

export default (state, action) => {
	switch (action.type) {
		case AUTH_USER_PRESENT:
			return { ...state, authUser: action.payload }
		case AUTH_USER_MISSING:
			return { ...state, authUser: null }
		default:
			return state
	}
}