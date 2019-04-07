import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import throttle from 'lodash/throttle'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import rootReducer from '../reducers'
import { loadState, saveState } from '../util/localStorage'

export default () => {
	const preloadedState = loadState()

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
		saveState({
			session: store.getState().session,
			coworks: store.getState().coworks
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