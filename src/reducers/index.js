const initialState = {
	authUser: null
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_USER_PRESENT':
			return { authUser: action.payload }
		case 'AUTH_USER_MISSING':
			return { initialState }
		default:
			return state
	}
}