import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { loadAuthUser, saveAuthUser } from './util/localStorage'
import _ from 'lodash'
import Firebase from './components/Firebase'

import theme from './theme/customTheme'
import { ThemeProvider } from 'styled-components'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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

store.subscribe(_.throttle(() => {
	saveAuthUser({
		authUser: store.getState().authUser
	})
}, 1000))

render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<ConnectedApp /> 
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()