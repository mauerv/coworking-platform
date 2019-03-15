import React from 'react';
import { render } from 'react-dom';

import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App/';
import Firebase, { FirebaseContext } from './components/Firebase'

render(
	<FirebaseContext.Provider value={new Firebase()}>
		<App /> 
	</FirebaseContext.Provider>,
	document.getElementById('root')
)

serviceWorker.unregister()