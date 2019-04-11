import userReducer from '../userReducer'
import * as types from '../../constants/actionTypes'


it('should return the initial state', () => {
	expect(userReducer(undefined, {})).toEqual({ coworks: [] })
})

it('should handle USER_DATA_SET', () => {
	const initialState = { coworks: [] } 
	const action = {
		type: types.USER_DATA_SET,
		payload: [1, 2, 3]
	}
	const nextState = { coworks: [1, 2, 3] }
	expect(userReducer(initialState, action)).toEqual(nextState)
})
