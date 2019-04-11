import coworksReducer from '../coworksReducer'
import * as types from '../../constants/actionTypes'


it('should return the initial state', () => {
	expect(coworksReducer(undefined, {})).toEqual({})
})

it('should handle COWORK_LIST_SET', () => {
	const initialState = {
		'a': { name: 'Olegario' },
		'b': { name: 'Linka' }
	}
	const action = { 
		type: types.COWORK_LIST_SET, 
		payload: {
			'a': { name: 'Olegario' },
			'b': { name: 'Linka' },
			'c': { name: 'Whale' }
		}
	}
	const nextState = {
			'a': { name: 'Olegario' },
			'b': { name: 'Linka' },
			'c': { name: 'Whale' }
		}

	expect(coworksReducer(initialState, action)).toEqual(nextState)
})

