import { connect } from 'react-redux'

import Account from '../components/Account'

const mapStateToProps = state => ({
	authUser: state.authUser
})

const ConnectedAccount = connect(
	mapStateToProps
)(Account)

export default ConnectedAccount