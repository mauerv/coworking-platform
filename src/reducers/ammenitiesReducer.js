import { AMMENITY_LIST_FETCH } from '../constants/actionTypes'

const initialState = {}

export default (state = initialState, action) => {
	switch (action.type) {
		case AMMENITY_LIST_FETCH:
			return applyAmmenityListFetch(state, action)
		default: 
			return state
	}
}

export const applyAmmenityListFetch = (state, action) => ({
	...action.payload
})
