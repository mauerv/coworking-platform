import React, { Component } from 'react'
import { compose } from 'recompose'

import { 
	withAuthorization, 
	withEmailVerification,
	userIsAuthenticated 
} from '../../session'
import { withFirebase } from '../../firebase'

import UserList from './UserList'

class Admin extends Component {
	state = { 
		loading: false, 
		users: [] 
	}

	componentDidMount() {
		this.setState({ loading: true })

		this.props.firebase.users().on('value', snapshot => {
			const usersObject = snapshot.val()

			const usersList = Object.keys(usersObject).map(key => ({
				...usersObject[key],
				uid: key
			}))

			this.setState({
				users: usersList,
				loading: false
			})
		})
	}

	componentWillUnmount() {
		this.props.firebase.users().off()
	}

	render() {
		const { users, loading } = this.state

		return (
			<div>
				<h1>Admin</h1>

				{loading && <div>Loading ...</div>}

				<UserList users={users} />
			</div>
		)
	}
}

export default compose(
	withFirebase,
	withEmailVerification,
	withAuthorization(userIsAuthenticated)
)(Admin)