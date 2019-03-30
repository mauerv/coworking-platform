import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'

const config = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.envREACT_APP_MESSAGING_SENDER_ID
}

class Firebase {
	constructor() {
		app.initializeApp(config)

		this.auth = app.auth()
		this.db = app.database()
		this.storage = app.storage()
	}

	// *** Auth API ***

	doCreateUserWithEmailAndPassword = (email, password) =>
		this.auth.createUserWithEmailAndPassword(email, password)
	
	doSignInWithEmailAndPassword = (email, password) => 
		this.auth.signInWithEmailAndPassword(email, password)

	doSignOut = () => this.auth.signOut()

	doPasswordReset = email => this.auth.sendPasswordResetEmail(email)

	doPasswordUpdate = password => 
		this.auth.currentUser.updatePassword(password)

	doSendEmailVerification = () => 
		this.auth.currentUser.sendEmailVerification({
			url: process.env.REACT_APP_CONFIRMATION_EMAIL_REDIRECT
		})

	// *** User API ***

	user = uid => this.db.ref(`users/${uid}`)

	users = () => this.db.ref('users')

	// *** Merge Auth and DB User API ***

	onAuthUserListener = (next, fallback) =>
		this.auth.onAuthStateChanged(authUser => {
			if (authUser) {
				this.user(authUser.uid)
					.once('value')
					.then(snapshot => {
						const dbUser = snapshot.val()

						authUser = {
							uid: authUser.uid,
							email: authUser.email,
							emailVerified: authUser.emailVerified,
							providerData: authUser.providerData,
							...dbUser
						}

						next(authUser)
					})
				} else {
					fallback()
				}
		})

	// *** Cowork API ***

	cowork = uid => this.db.ref(`coworks/${uid}`)

	coworks = () => this.db.ref('coworks')
}

export default Firebase