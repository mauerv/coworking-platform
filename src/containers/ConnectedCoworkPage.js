import { connect } from 'react-redux'
import { compose } from 'recompose'

import { withFirebase } from '../firebase'
import { 
	withAuthorization, 
	withEmailVerification, 
	userIsAuthenticated
} from '../session'

import CoworkPage from '../components/CoworkPage'

import { getCowork } from '../selectors'
import { doCoworkDataFetch } from '../actions'

const mapStateToProps = (state, ownProps) => ({
	cowork: getCowork(state, ownProps.match.params.cowork_id)
})

export default compose(
	withFirebase,
	withEmailVerification,
	withAuthorization(userIsAuthenticated),
	connect(
		mapStateToProps,
		{ onCoworkDataFetch: doCoworkDataFetch }
	)
)(CoworkPage)

