import { combineReducers } from 'redux'

import authUserReducer from './authUserReducer'
import firebaseReducer from './firebaseReducer'
import coworksReducer from './coworksReducer'

const rootReducer = combineReducers({
	authUser: authUserReducer,
	firebase: firebaseReducer,
	coworks: coworksReducer
})

export default rootReducer