import React, { Component } from 'react'
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom'
// Style Imports
import GlobalStyle from '../../theme/globalStyle'
import { Normalize } from 'styled-normalize'
import { AppWrapper, ContentWrapper } from './styles'

import ConnectedHome from '../../containers/ConnectedHome'
import ConnectedCoworkCreate from '../../containers/ConnectedCoworkCreate'
import ConnectedAccount from '../../containers/ConnectedAccount'
import Navigation from '../Navigation'
import Landing from '../Landing'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import PasswordForget from '../PasswordForget'
import Footer from '../Footer'
import CoworkPage from '../CoworkPage'

import * as ROUTES from '../../constants/routes'

class App extends Component {
	componentDidMount() {
		this.listener = this.props.firebase.onAuthUserListener(
			this.props.authUserPresent,
			this.props.authUserMissing
		)
	}

	componentWillUnmount() {
		this.listener()
	}

	render() {
		return (
			<Router>
				<AppWrapper>
					<Normalize />
					<GlobalStyle />
					<Navigation />
					<ContentWrapper>
						
						{this.props.authUser ? (
							<Route exact path={ROUTES.HOME} component={ConnectedHome} />
						) : (
							<Route exact path={ROUTES.HOME} component={Landing} />
						)}

						<Route path={ROUTES.SIGN_UP} component={SignUp} />
						<Route path={ROUTES.SIGN_IN} component={SignIn} />
						<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
						<Route path={ROUTES.ACCOUNT} component={ConnectedAccount} />
						<Route exact path={ROUTES.COWORK} component={CoworkPage} />
						<Route path={ROUTES.CREATE} component={ConnectedCoworkCreate} />
					</ContentWrapper>
					<Footer />
				</AppWrapper>
			</Router>
		)
	}
}

export default App