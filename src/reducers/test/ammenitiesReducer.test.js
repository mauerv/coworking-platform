import ammenitiesReducer from '../ammenitiesReducer'
import * as types from '../../constants/actionTypes'


it('should return the initial state', () => {
	expect(ammenitiesReducer(undefined, {})).toEqual({})
})

it('should handle AMMENITY_LIST_SET', () => {
	const initialState = {} 
	const action = {
		type: types.AMMENITY_LIST_SET,
		payload: {
			'x': { label: 'Coffee' },
			'y': { label: 'Fridge' }
		}
	}
	const nextState = {
		'x': { label: 'Coffee' },
		'y': { label: 'Fridge' }
	}
	expect(ammenitiesReducer(initialState, action)).toEqual(nextState)
})
