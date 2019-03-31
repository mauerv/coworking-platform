import React from 'react'
import PropTypes from 'prop-types'

const UserList = ({ users }) => (
	<ul>
		{users.map(user => (
			<li key={user.uid}>
				<span>
					<strong>ID:</strong> {user.uid}
				</span>
				<span>
					<strong>E-Mail:</strong> {user.email}
				</span>
				<span>
					<strong>Username:</strong> {user.username}
				</span>
			</li>
		))}
	</ul>
)

UserList.propTypes = {
	users: PropTypes.arrayOf(PropTypes.shape({
		uid: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		username: PropTypes.string.isRequired
	}).isRequired).isRequired
}

export default UserList