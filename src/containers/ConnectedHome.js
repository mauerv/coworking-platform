import { connect } from 'react-redux'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../components/Session'

import HomePage from '../components/Home'

import { getCoworks } from '../selectors'

import { doCoworkListUpdate } from '../actions'

const mapStateToProps = state => ({
	coworks: getCoworks(state)
})

const ConnectedHomePage = connect(
	mapStateToProps,
	{ onCoworksUpdate: doCoworkListUpdate }
)(HomePage)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(ConnectedHomePage)
