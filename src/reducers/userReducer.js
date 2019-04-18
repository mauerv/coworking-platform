import { USER_DATA_SET, USER_COWORK_ADD, COWORK_DELETE } from '../constants/actionTypes'

const initialState = {
	coworks: {},
	username: '',
	email: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_DATA_SET:
			return applyUserDataSet(state, action)
		case USER_COWORK_ADD:
			return applyUserCoworkAdd(state, action)
		case COWORK_DELETE:
			return applyCoworkDelete(state, action)
		default: 
			return state
	}
}

export const applyUserDataSet = (state, action) => ({
	...action.payload
})

export const applyUserCoworkAdd = (state, action) => ({
	...state,
 	coworks: { ...state.coworks, [action.payload]: action.payload }
})

export const applyCoworkDelete = (state, action) => {
	let newCoworks = { ...state.coworks }
	for (let key in newCoworks) {
		if (newCoworks[key] === action.payload) {
			delete newCoworks[key]
		}
	}
	return { ...state, coworks: { ...newCoworks } }
}