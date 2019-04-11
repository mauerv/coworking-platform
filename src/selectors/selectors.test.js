import * as selectors from './'

const state = {
	session: { authUser: null },
	coworks: {
		'a': { name: 'Olegario' },
		'b': { name: 'Linka' }
	},
	user: { name: 'Mauro' },
	ammenities: {
		'x': { label: 'Coffee' },
		'y': { label: 'Fridge' }
	}
}

it('getAuthUser should get the authUser from state', () => {
	const expectedSubState = null

	expect(selectors.getAuthUser(state)).toEqual(expectedSubState)
})

it('getCoworks should get the list of coworks from state', () => {
	const expectedSubState = [
		{
			name: 'Olegario',
			uid: 'a'
		},
		{
			name: 'Linka',
			uid: 'b'
		}
	]

	expect(selectors.getCoworks(state)).toEqual(expectedSubState)
})

it('getCowork should get an individual cowork from state by id', () => {
	expect(selectors.getCowork(state, 'a')).toEqual({ name: 'Olegario' })
})

it('getCowork should return undefined when a cowork id doesnt exist on state.', () => {
	expect(selectors.getCowork(state, 'c')).toEqual(undefined)
})

it('getUser should get the user data from state', () => {
	const expectedSubState = { name: 'Mauro' }

	expect(selectors.getUser(state)).toEqual(expectedSubState)
})

it('getAmmenities should get an array of ammenities from state', () => {
	const expectedSubState = [
		{
			label: 'Coffee',
			uid: 'x'
		},
		{
			label: 'Fridge',
			uid: 'y'
		}
	]
	expect(selectors.getAmmenities(state)).toEqual(expectedSubState)	
})