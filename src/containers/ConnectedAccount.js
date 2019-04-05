import { connect } from 'react-redux'

import Account from '../components/Account'

import { getAuthUser } from '../selectors'

const mapStateToProps = state => ({
	authUser: getAuthUser(state)
})

const ConnectedAccount = connect(
	mapStateToProps
)(Account)

export default ConnectedAccount