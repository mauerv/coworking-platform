import { AUTH_USER_PRESENT, AUTH_USER_MISSING } from '../constants/actionTypes'

const initialState = {
	authUser: null
}

const authUserReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_USER_PRESENT:
			return applyAuthUserPresent(state, action)
		case AUTH_USER_MISSING:
			return applyAuthUserMissing(state, action)
		default:
			return state
	}
}

const applyAuthUserPresent = (state, action) => ({
	 ...state, 
	 authUser: action.payload
})

const applyAuthUserMissing = (state, action) => ({
	...state,
	authUser: null
})

export default authUserReducer	
