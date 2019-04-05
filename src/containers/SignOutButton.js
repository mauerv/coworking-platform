import { connect } from 'react-redux'
import { getFirebase } from '../selectors'

import BaseSignOutButton from '../components/SignOut'

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const SignOutButton = connect(mapStateToProps)(BaseSignOutButton)

export default SignOutButton