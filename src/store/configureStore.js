import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import Firebase from '../components/Firebase'
import rootReducer from '../reducers'
import { loadAuthUser, saveAuthUser } from '../util/localStorage'

const getPreloadedState = () => {
	const preloadedAuthUser = loadAuthUser()
	const preloadedState = {
		...preloadedAuthUser,
		firebase: new Firebase()
	}

	return preloadedState
}

export const configureStore = () => {
	const preloadedState = getPreloadedState()

	const middlewares = [thunk]
	const middlewareEnhancer = applyMiddleware(...middlewares)

	const storeEnhancers = [middlewareEnhancer]

	const composedEnhancer = composeWithDevTools(...storeEnhancers)
	
	const store = createStore(
		rootReducer,
		preloadedState,
		composedEnhancer
	)

	store.subscribe(throttle(() => {
		saveAuthUser({
			authUser: store.getState().authUser
		})
	}, 1000))

  if(process.env.NODE_ENV !== "production") {
		if (module.hot) {
			module.hot.accept('../reducers/index', () => {
				const newRootReducer = require('../reducers/index').default
				store.replaceReducer(newRootReducer)
			})
		}
	}

	return store
}