import { USER_DATA_SET} from '../constants/actionTypes'

const initialState = {
	coworks: {},
	username: '',
	email: ''
}

export default (state = initialState, action) => {
	switch (action.type) {
		case USER_DATA_SET:
			return applyUserDataSet(state, action)
		default: 
			return state
	}
}

export const applyUserDataSet = (state, action) => ({
	...action.payload
})