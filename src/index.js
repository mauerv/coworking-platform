import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import './index.css';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'

import ConnectedApp from './containers/ConnectedApp';

const store = createStore(
	rootReducer,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
	<Provider store={store}>
		<ConnectedApp /> 
	</Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()