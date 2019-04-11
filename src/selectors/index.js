export const getAuthUser = state => state.session.authUser

export const getCoworks = state => {
	const coworkList = Object.keys(state.coworks).map(key => ({
		...state.coworks[key],
		uid: key
	}))
	return coworkList
}

export const getCowork = (state, uid) => state.coworks[uid]

export const getUser = state => state.user

export const getAmmenities = state => {
	const ammenitiesList = Object.keys(state.ammenities).map(key => ({
		...state.ammenities[key],
		uid: key
	}))
	return ammenitiesList
}