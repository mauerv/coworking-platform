import { COWORK_LIST_UPDATE } from '../constants/actionTypes'

const initialState = []

const coworksReducer = (state = initialState, action) => {
	switch (action.type) {
		case COWORK_LIST_UPDATE:
			return applyCoworkListUpdate(state, action)
		default: 
			return state
	}
}

const applyCoworkListUpdate = (state, action) => ([
	...action.payload
])

export default coworksReducer

export { applyCoworkListUpdate }