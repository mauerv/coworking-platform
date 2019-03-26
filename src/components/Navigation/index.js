import React from 'react'
import { Link } from 'react-router-dom'

import SignOutButton from '../../containers/SignOutButton'
import { 
	NavigationWrapper, 
	NavigationList,
	NavigationLink 
} from './styles'

import * as ROUTES from '../../constants/routes'


const Navigation = ({ authUser }) => (	
	<NavigationWrapper>
		{authUser ? <NavigationAuth /> : <NavigationNonAuth />}
	</NavigationWrapper>
)

const NavigationAuth = () => (
	<NavigationList>	
		<NavigationLink>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</NavigationLink>
		<NavigationLink>
			<Link to={ROUTES.HOME}>Home</Link>
		</NavigationLink>
		<NavigationLink>
			<Link to={ROUTES.ACCOUNT}>Account</Link>
		</NavigationLink>
		<NavigationLink>
			<Link to={ROUTES.ADMIN}>Admin</Link>
		</NavigationLink>
		<NavigationLink>
			<SignOutButton />
		</NavigationLink>
	</NavigationList>
)

const NavigationNonAuth = () => (
	<NavigationList>
		<NavigationLink>
			<Link to={ROUTES.LANDING}>Landing</Link>
		</NavigationLink>
		<NavigationLink>
			<Link to={ROUTES.SIGN_IN}>Sign In</Link>
		</NavigationLink>
	</NavigationList>
)

export default Navigation