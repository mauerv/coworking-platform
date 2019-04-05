import { connect } from 'react-redux'
import { getAuthUser } from '../selectors'

import Account from '../components/Account'

const mapStateToProps = state => ({
	authUser: getAuthUser(state)
})

const ConnectedAccount = connect(
	mapStateToProps
)(Account)

export default ConnectedAccount