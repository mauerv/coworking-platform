import * as actions from './index'
import * as types from '../constants/actionTypes'

it('should create an action to set auth user', () => {
	let expectedAction = {
		type: types.AUTH_USER_SET,
		payload: { name: 'Test' }
	}

	expect(actions.doAuthUserSet({ name: 'Test' })).toEqual(expectedAction)

	expectedAction = {
		type: types.AUTH_USER_SET,
		payload: null
	}

	expect(actions.doAuthUserSet(null)).toEqual(expectedAction)
})

it('should create an action to update the list of coworks', () => {
	const expectedAction = {
		type: types.COWORK_LIST_UPDATE,
		payload: [1, 2, 3, 4] 
	}

	expect(actions.doCoworkListUpdate([1, 2, 3, 4])).toEqual(expectedAction)
})

it('should create an action to show user data', () => {
	const expectedAction = {
		type: types.USER_DATA_SHOW,
		payload: { name: 'user' } 
	}

	expect(actions.doUserDataShow({ name: 'user' })).toEqual(expectedAction)
})
