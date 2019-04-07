import { COWORK_LIST_UPDATE } from '../constants/actionTypes'

const initialState = []

export default (state = initialState, action) => {
	switch (action.type) {
		case COWORK_LIST_UPDATE:
			return applyCoworkListUpdate(state, action)
		default: 
			return state
	}
}

export const applyCoworkListUpdate = (state, action) => ([
	...action.payload
])
