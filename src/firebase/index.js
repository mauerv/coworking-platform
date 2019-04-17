import FirebaseContext, { withFirebase } from './context'
import Firebase from './firebase'

const firebase = new Firebase()

export { 
	FirebaseContext, 
	withFirebase, 
	Firebase,
	firebase
}