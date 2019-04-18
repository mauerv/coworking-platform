import React, { Component } from 'react'
import { 
	BrowserRouter as Router,
	Route 
} from 'react-router-dom'

import { withFirebase } from '../../firebase'

import ConnectedHome from '../../containers/ConnectedHome'
import ConnectedCoworkCreate from '../../containers/ConnectedCoworkCreate'
import ConnectedAccount from '../../containers/ConnectedAccount'
import ConnectedNavigation from '../../containers/ConnectedNavigation'
import ConnectedCoworkPage from '../../containers/ConnectedCoworkPage'
import ConnectedCoworkUpdate from '../../containers/ConnectedCoworkUpdate'
import Landing from '../Landing'
import SignUp from '../SignUp'
import SignIn from '../SignIn'
import PasswordForget from '../PasswordForget'
import Footer from '../Footer'

import * as ROUTES from '../../constants/routes'

import GlobalStyle from '../../theme/globalStyle'
import { Normalize } from 'styled-normalize'
import { AppWrapper, ContentWrapper } from './styles'

class App extends Component {
	componentDidMount() {
		this.listener = this.props.firebase.onAuthUserListener(
			authUser => this.props.onAuthUserSet(authUser),
			() => this.props.onAuthUserSet(null)
		)

		this.props.onAmmenityListFetch()
	}

	componentWillUnmount() {
		this.listener()
		this.props.firebase.ammenities().off()
	}

	render() {
		return (
			<Router>
				<AppWrapper>
					<Normalize />
					<GlobalStyle />
					<ConnectedNavigation />
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
						<Route exact path={ROUTES.COWORK} component={ConnectedCoworkPage} />
						<Route path={ROUTES.CREATE} component={ConnectedCoworkCreate} />
						<Route path={ROUTES.UPDATE} component={ConnectedCoworkUpdate} />
					</ContentWrapper>
					<Footer />
				</AppWrapper>
			</Router>
		)
	}
}

export default withFirebase(App)