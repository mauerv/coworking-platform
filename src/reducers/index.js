import { combineReducers } from 'redux'

import authUserReducer from './authUserReducer'
import firebaseReducer from './firebaseReducer'

const rootReducer = combineReducers({
	authUser: authUserReducer,
	firebase: firebaseReducer
})

export default rootReducer