import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import Firebase, { FirebaseContext } from './firebase'
import configureStore from './store/configureStore'
import initIconLibrary from './util/initIconLibrary'
import theme from './theme/customTheme'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

initIconLibrary()

const firebase = new Firebase()

const store = configureStore()

const rootEl = document.getElementById('root')

let render = () => {
	const ConnectedApp = require('./containers/ConnectedApp').default

	ReactDOM.render(
		<FirebaseContext.Provider value={firebase}>
			<Provider store={store}>
				<ThemeProvider theme={theme}>
					<ConnectedApp /> 
				</ThemeProvider>
			</Provider>
		</FirebaseContext.Provider>,
		rootEl
	)
}

if (module.hot) {
	const renderApp = render
	const renderError = (error) => {
		const RedBox = require('redbox-react').default
		ReactDOM.render(
			<RedBox error={error} />,
			rootEl
		)
	}

	render = () => {
		try {
			renderApp()
		}
		catch(error) {
			console.error(error)
			renderError(error)
		}
	}

	module.hot.accept('./containers/ConnectedApp', () => {
		setTimeout(render)
	})
}

render()


