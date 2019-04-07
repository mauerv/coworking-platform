import { combineReducers } from 'redux'

import sessionReducer from './sessionReducer'
import coworksReducer from './coworksReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	session: sessionReducer,
	coworks: coworksReducer,
	user: userReducer
})

export default rootReducer