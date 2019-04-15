import { getIdListFromObj } from '../util/helperFunctions'

export const getAuthUser = state => state.session.authUser

export const getCoworks = state => 
	Object.keys(state.coworks).map(key => ({
		...state.coworks[key],
		uid: key
	}))

export const getCowork = (state, uid) => state.coworks[uid]

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



