import { 
	COWORK_LIST_SET, 
	COWORK_DELETE,
	COWORK_DATA_SET 
} from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case COWORK_LIST_SET:
			return applyCoworkListSet(state, action)
		case COWORK_DELETE:
			return applyCoworkDelete(state, action)
		case COWORK_DATA_SET:
			return applyCoworkDataSet(state, action)
		default: 
			return state
	}
}

export const applyCoworkListSet = (state, action) => {
	let newState = {...state, ...action.payload}
	return newState
}

export const applyCoworkDelete = (state, action) => {
	let newState = { ...state }
	delete newState[action.payload]
	return newState 
}

export const applyCoworkDataSet = (state, action) => { 
	console.log('Action Payload', action.payload)
	let newState = { ...state, [action.payload.id]: action.payload.cowork }
	return newState
}


