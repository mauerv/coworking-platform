export const loadAuthUser = () => {
	try {	
		const serializedState = localStorage.getItem('authUser')
		if (serializedState === null) {
			return { authUser: null }
		}
		return JSON.parse(serializedState)
	} catch (err) {
		return { authUser: null }

	}
}

export const saveAuthUser = authUser => {
	try {
		const serializedState = JSON.stringify(authUser)
		localStorage.setItem('authUser', serializedState)
	} catch (err) {
		// ignore write errors

	}
}
