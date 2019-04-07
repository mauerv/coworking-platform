import { AUTH_USER_SET } from '../constants/actionTypes'

const initialState = {
	authUser: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case AUTH_USER_SET:
			return applyAuthUserSet(state, action)
		default:
			return state
	}
}

export const applyAuthUserSet = (state, action) => ({
	 ...state, 
	 authUser: action.payload
})
