import { connect } from 'react-redux'
import { compose } from 'recompose'

import { withFirebase } from '../firebase'

import CoworkPage from '../components/CoworkPage'

import { getCowork } from '../selectors'
import { doCoworkSet } from '../actions'

const mapStateToProps = (state, ownProps) => ({
	cowork: getCowork(state, ownProps.match.params.cowork_id)
})

export default compose(
	withFirebase,
	connect(
		mapStateToProps,
		{ onCoworkSet: doCoworkSet }
	)
)(CoworkPage)
