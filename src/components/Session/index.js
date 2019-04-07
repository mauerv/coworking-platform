import withAuthorization from './withAuthorization'
import withEmailVerification from './withEmailVerification'

export const userIsAuthenticated = authUser => !!authUser

export { 
	withAuthorization,
	withEmailVerification 
}

