import { COWORK_LIST_SET } from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case COWORK_LIST_SET:
			return applyCoworkListSet(state, action)
		default: 
			return state
	}
}

export const applyCoworkListSet = (state, action) => ({
	...action.payload
})
