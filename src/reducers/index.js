import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import sessionReducer from './sessionReducer'
import coworksReducer from './coworksReducer'
import userReducer from './userReducer'
import ammenitiesReducer from './ammenitiesReducer'

export default combineReducers({
	session: sessionReducer,
	coworks: coworksReducer,
	user: userReducer,
	ammenities: ammenitiesReducer,
	form: formReducer
})
