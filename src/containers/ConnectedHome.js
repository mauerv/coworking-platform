import { connect } from 'react-redux'
import { compose } from 'recompose'

import { withAuthorization, withEmailVerification } from '../components/Session'

import Home from '../components/Home'

import { getCoworks } from '../selectors'

import { doCoworkListUpdate } from '../actions'

const mapStateToProps = state => ({
	coworks: getCoworks(state)
})

const ConnectedHome = connect(
	mapStateToProps,
	{ onCoworksUpdate: doCoworkListUpdate }
)(Home)

const condition = authUser => !!authUser

export default compose(
	withEmailVerification,
	withAuthorization(condition)
)(ConnectedHome)
