import * as actions from './index'
import * as types from '../constants/actionTypes'

it('doAuthUserSet should create an action to set auth user', () => {
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

it('doCoworkListSet should create an action to update the list of coworks', () => {
	const expectedAction = {
		type: types.COWORK_LIST_SET,
		payload: [1, 2, 3, 4] 
	}

	expect(actions.doCoworkListSet([1, 2, 3, 4])).toEqual(expectedAction)
})

it('doUserDataSet should create an action to show user data', () => {
	const expectedAction = {
		type: types.USER_DATA_SET,
		payload: { name: 'user' } 
	}

	expect(actions.doUserDataSet({ name: 'user' })).toEqual(expectedAction)
})

it('doAmmenityListSet should create an action to update the list of ammenities', () => {
	const inputData = {
		coffee: {
			label: 'Coffee',
			icon: 'mug-hot'
		}
	}

	const expectedAction = {
		type: types.AMMENITY_LIST_SET,
		payload: inputData 
	}

	expect(actions.doAmmenityListSet(inputData)).toEqual(expectedAction)
})