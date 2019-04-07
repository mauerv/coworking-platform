import React from 'react'
import { connect } from 'react-redux'

import { withFirebase } from '../Firebase'

import Button from '../Button'

const SignOutButton = ({ firebase }) => (
	<Button onClick={firebase.doSignOut} text='Sign Out' />
)

export default withFirebase(SignOutButton)