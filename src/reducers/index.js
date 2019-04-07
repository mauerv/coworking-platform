import { combineReducers } from 'redux'

import sessionReducer from './sessionReducer'
import coworksReducer from './coworksReducer'
import userReducer from './userReducer'

export default combineReducers({
	session: sessionReducer,
	coworks: coworksReducer,
	user: userReducer
})
