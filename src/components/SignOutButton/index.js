import React from 'react'

import { withFirebase } from '../../firebase'

import Button from '../Button'

const SignOutButton = ({ firebase }) => (
	<Button onClick={firebase.doSignOut} text='Sign Out' />
)

export default withFirebase(SignOutButton)