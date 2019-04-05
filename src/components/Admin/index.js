import React, { Component } from 'react'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../Session'

import UserList from './UserList'

class BaseAdminPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			loading: false,
			users: []
		}
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

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(BaseAdminPage)