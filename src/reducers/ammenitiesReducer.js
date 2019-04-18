import { AMMENITY_LIST_SET } from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case AMMENITY_LIST_SET:
			return applyAmmenityListSet(state, action)
		default: 
			return state
	}
}

export const applyAmmenityListSet = (state, action) => ({
	...action.payload
})
