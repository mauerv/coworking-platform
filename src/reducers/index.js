import { combineReducers } from 'redux'

import authUserReducer from './authUserReducer'
import firebaseReducer from './firebaseReducer'
import coworksReducer from './coworksReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
	authUser: authUserReducer,
	firebase: firebaseReducer,
	coworks: coworksReducer,
	user: userReducer
})

export default rootReducer