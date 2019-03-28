import React, { Component } from 'react'
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom'

// Style Imports
import GlobalStyle from '../../theme/globalStyle'
import { Normalize } from 'styled-normalize'
import { AppWrapper, ContentWrapper } from './styles'

import Navigation from '../Navigation'
import LandingPage from '../Landing'
import SignUpPage from '../SignUp'
import SignInPage from '../SignIn'
import PasswordForgetPage from '../PasswordForget'
import HomePage from '../Home'
import AccountPage from '../Account'
import AdminPage from '../../containers/Admin'
import Footer from '../Footer'
import CoworkPage from '../CoworkPage'
import CoworkCreate from '../CoworkCreate'

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
						

						<Route exact path={ROUTES.LANDING} component={LandingPage} />
						<Route path={ROUTES.SIGN_UP} component={SignUpPage} />
						<Route path={ROUTES.SIGN_IN} component={SignInPage} />
						<Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
						<Route path={ROUTES.HOME} component={HomePage} />
						<Route path={ROUTES.ACCOUNT} component={AccountPage} />
						<Route path={ROUTES.ADMIN} component={AdminPage} />
						<Route exact path={ROUTES.COWORK} component={CoworkPage} />
						<Route path={ROUTES.CREATE} component={CoworkCreate} />
					</ContentWrapper>
					<Footer />
				</AppWrapper>
			</Router>
		)
	}
}

export default App