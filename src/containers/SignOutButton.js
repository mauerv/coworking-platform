import { connect } from 'react-redux'

import BaseSignOutButton from '../components/SignOut'

const mapStateToProps = state => ({
	firebase: state.firebase
})

const SignOutButton = connect(mapStateToProps)(BaseSignOutButton)

export default SignOutButton