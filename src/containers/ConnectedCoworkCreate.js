import { connect } from 'react-redux'

import CoworkCreate from '../components/CoworkCreate'

import { getFirebase, getAuthUser } from '../selectors'


const mapStateToProps = state => ({
	firebase: getFirebase(state),
	authUser: getAuthUser(state)
})

const ConnectedCoworkCreate = connect(
	mapStateToProps
)(CoworkCreate)

export default ConnectedCoworkCreate