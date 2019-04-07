import { combineReducers } from 'redux'

import sessionReducer from './sessionReducer'
import firebaseReducer from './firebaseReducer'
import coworksReducer from './coworksReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	session: sessionReducer,
	firebase: firebaseReducer,
	coworks: coworksReducer,
	user: userReducer
})

export default rootReducer