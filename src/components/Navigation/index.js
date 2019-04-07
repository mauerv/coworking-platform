import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import SignOutButton from '../SignOutButton'

import { getAuthUser } from '../../selectors'

import * as ROUTES from '../../constants/routes'

import { 
	NavWrapper, 
	NavList,
	NavLink,
	NavLogo
} from './styles'


const Navigation = ({ authUser }) => (	
	<div>
		{authUser ? <NavigationAuth /> : <NavigationNonAuth />}
	</div>
)

const NavigationAuth = () => (
	<NavWrapper>
		<NavLogo>
			<Link to={ROUTES.HOME}>COWORK</Link>
		</NavLogo>	
		<NavList>
			<NavLink>
				<Link to={ROUTES.CREATE}>Create Cowork</Link>
			</NavLink>
			<NavLink>
				<Link to={ROUTES.ACCOUNT}>Account</Link>
			</NavLink>
			<NavLink>
				<SignOutButton />
			</NavLink>
		</NavList>
	</NavWrapper>
)

const NavigationNonAuth = () => (
	<NavWrapper>
		<NavLogo>
				<Link to={ROUTES.HOME}>COWORK</Link>
		</NavLogo>
		<NavList>
			<NavLink>
				<Link to={ROUTES.SIGN_IN}>Sign In</Link>
			</NavLink>
		</NavList>
	</NavWrapper>
)

const mapStateToProps = state => ({
	authUser: getAuthUser(state)
})

export default connect(mapStateToProps)(Navigation)