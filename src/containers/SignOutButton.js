import { connect } from 'react-redux'

import BaseSignOutButton from '../components/SignOut'

import { getFirebase } from '../selectors'

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const SignOutButton = connect(mapStateToProps)(BaseSignOutButton)

export default SignOutButton