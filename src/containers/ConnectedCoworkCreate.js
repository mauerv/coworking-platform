import { connect } from 'react-redux'

import CoworkCreate from '../components/CoworkCreate'

import { getAuthUser } from '../selectors'


const mapStateToProps = state => ({
	authUser: getAuthUser(state)
})

const ConnectedCoworkCreate = connect(
	mapStateToProps
)(CoworkCreate)

export default ConnectedCoworkCreate