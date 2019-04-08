import coworksReducer from '../coworksReducer'
import * as types from '../../constants/actionTypes'


it('should return the initial state', () => {
	expect(coworksReducer(undefined, {})).toEqual([])
})

it('should handle COWORK_LIST_UPDATE', () => {
	const initialState = [1, 2, 3]
	const action = { 
		type: types.COWORK_LIST_UPDATE, 
		payload: [1, 2, 3, 4]
	}
	const nextState = [1, 2, 3, 4]

	expect(coworksReducer(initialState, action)).toEqual(nextState)
})
