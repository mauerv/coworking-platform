import sessionReducer from '../sessionReducer'
import * as types from '../../constants/actionTypes'


it('should return the initial state', () => {
	expect(sessionReducer(undefined, {})).toEqual({ authUser: null })
})

it('should handle AUTH_USER_SET', () => {
	const initialState = { authUser: null }
	const action = {
		type: types.AUTH_USER_SET, 
		payload: { name: 'Test' } 
	} 
	const nextState = { 
		authUser: {
			name: 'Test'
		}
	}

	expect(sessionReducer(initialState, action)).toEqual(nextState)
})
