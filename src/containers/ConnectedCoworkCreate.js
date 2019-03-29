import { connect } from 'react-redux'
import CoworkCreate from '../components/CoworkCreate'

const mapStateToProps = state => ({
	firebase: state.firebase,
	authUser: state.authUser
})

const ConnectedCoworkCreate = connect(
	mapStateToProps
)(CoworkCreate)

export default ConnectedCoworkCreate