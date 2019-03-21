import React from 'react'

const BaseSignOutButton = ({ firebase }) => (
	<button type="button" onClick={firebase.doSignOut} >
		Sign Out
	</button>
)


export default BaseSignOutButton