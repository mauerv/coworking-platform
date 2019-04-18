import { COWORK_LIST_SET, COWORK_DELETE } from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case COWORK_LIST_SET:
			return applyCoworkListSet(state, action)
		case COWORK_DELETE:
			return applyCoworkDelete(state, action)
		default: 
			return state
	}
}

export const applyCoworkListSet = (state, action) => ({
	...state,
	...action.payload
})

export const applyCoworkDelete = (state, action) => {
	let newState = { ...state }
	delete newState[action.payload]
	return newState 
}