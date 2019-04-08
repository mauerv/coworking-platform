import * as selectors from './'

const state = {
	session: { authUser: null },
	coworks: [1, 2, 3],
	user: { name: 'Mauro' }
}

it('should get the authUser from state', () => {
	const expectedSubState = null

	expect(selectors.getAuthUser(state)).toEqual(expectedSubState)
})

it('should get the list of coworks from state', () => {
	const expectedSubState = [1, 2, 3]

	expect(selectors.getCoworks(state)).toEqual(expectedSubState)
})

it('should get the user data from state', () => {
	const expectedSubState = { name: 'Mauro' }

	expect(selectors.getUser(state)).toEqual(expectedSubState)
})
