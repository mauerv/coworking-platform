import { getIdListFromObj } from '../util/helperFunctions'

export const getAuthUser = state => state.session.authUser

export const getCoworks = state => 
	Object.keys(state.coworks).map(key => ({
		...state.coworks[key],
		uid: key
	}))

export const getCowork = (state, uid) => {
	if (state.coworks[uid] !== undefined) {
		let cowork = state.coworks[uid]
		if (cowork.ammenities !== undefined && cowork.ammenities.length > 0) {
			cowork.ammenities = cowork.ammenities.map(ammenity => state.ammenities[ammenity])
		} else cowork.ammenities = []
		return cowork
	}
	return undefined
}

export const getUser = state => ({
	username: state.user.username,
	email: state.user.email,
	coworks: _getUserCoworksData(state.user.coworks, state)
})

const _getUserCoworksData = (ids, state) => 
	getIdListFromObj(ids).map(id => ({...state.coworks[id], uid: id }))

export const getAmmenities = state => 
	Object.keys(state.ammenities).map(key => ({
		...state.ammenities[key],
		uid: key
	}))

export const getCoworkUpdateInitVal = (state, cowork) => {
	if (cowork !== undefined) {
		let initialValues = {
			coworkName: cowork.coworkName,
			coworkLocation: cowork.coworkLocation,
			smallDescription: cowork.smallDescription,
			description: cowork.description,
			openingWeekday: cowork.openingWeekday,
			openingWeekend: cowork.openingWeekend,
			ammenities: {}
		}
		if (cowork.amenities !== undefined) {
			cowork.ammenities.forEach(ammenity => {
				initialValues.ammenities[ammenity] = true
			})
		}
		return initialValues
	} else return {}
}


	

