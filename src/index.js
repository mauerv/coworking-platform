import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { loadAuthUser, saveAuthUser } from './util/localStorage'
import Firebase from './components/Firebase'

import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'

import ConnectedApp from './containers/ConnectedApp';

const persistedAuthUser = loadAuthUser()

const persistedState = {
	...persistedAuthUser,
	firebase: new Firebase()
}

const store = createStore(
	rootReducer,
	persistedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
	saveAuthUser({
		authUser: store.getState().authUser
	})
})

render(
	<Provider store={store}>
		<ConnectedApp /> 
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()