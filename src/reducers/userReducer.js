import { USER_DATA_SHOW} from '../constants/actionTypes'

const initialState = {
	coworks: []
}

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_DATA_SHOW:
			return applyUserDataShow(state, action)
		default: 
			return state
	}
}

export const applyUserDataShow = (state, action) => ({
	...state,
	coworks: action.payload
})