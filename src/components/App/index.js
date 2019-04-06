import React, { Component } from 'react'
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom'
// Style Imports
import GlobalStyle from '../../theme/globalStyle'
import { Normalize } from 'styled-normalize'
import { AppWrapper, ContentWrapper } from './styles'

import ConnectedHomePage from '../../containers/ConnectedHomePage'
import ConnectedCoworkCreate from '../../containers/ConnectedCoworkCreate'
import ConnectedAccountPage from '../../containers/ConnectedAccount'
import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
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
					<Navigation authUser={this.props.authUser}/>
					<ContentWrapper>
						
						{this.props.authUser ? (
							<Route exact path={ROUTES.HOME} component={ConnectedHomePage} />
						) : (
							<Route exact path={ROUTES.HOME} component={LandingPage} />
						)}

						<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
						<Route path={ROUTES.SIGN_IN} component={SignInPage} />
						<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
						<Route path={ROUTES.ACCOUNT} component={ConnectedAccountPage} />
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