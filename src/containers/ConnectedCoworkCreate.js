import { connect } from 'react-redux'
import { getFirebase, getAuthUser } from '../selectors'
import CoworkCreate from '../components/CoworkCreate'

const mapStateToProps = state => ({
	firebase: getFirebase(state),
	authUser: getAuthUser(state)
})

const ConnectedCoworkCreate = connect(
	mapStateToProps
)(CoworkCreate)

export default ConnectedCoworkCreate