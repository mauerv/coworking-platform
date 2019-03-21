import Firebase from '../components/Firebase'

const initialState = {
	authUser: null,
	firebase: new Firebase()
}

export default (state = initialState, action) => {
	switch (action.type) {
		case 'AUTH_USER_PRESENT':
			return { ...state, authUser: action.payload }
		case 'AUTH_USER_MISSING':
			return { ...state, authUser: null }
		default:
			return state
	}
}