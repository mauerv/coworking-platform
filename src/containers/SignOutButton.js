import React from 'react'
import { connect } from 'react-redux'

import Button from '../components/Button'

import { getFirebase } from '../selectors'

const BaseSignOutButton = ({ firebase }) => (
	<Button onClick={firebase.doSignOut} text='Sign Out' />
)

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const SignOutButton = connect(mapStateToProps)(BaseSignOutButton)

export default SignOutButton