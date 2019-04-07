import { AUTH_USER_SET } from '../constants/actionTypes'

const initialState = {
	authUser: null
}

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case AUTH_USER_SET:
			return applyAuthUserSet(state, action)
		default:
			return state
	}
}

const applyAuthUserSet = (state, action) => ({
	 ...state, 
	 authUser: action.payload
})

export default sessionReducer	

export { applyAuthUserSet }
