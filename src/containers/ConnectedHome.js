import { connect } from 'react-redux'
import { compose } from 'recompose'

import { 
	withAuthorization, 
	withEmailVerification,
	userIsAuthenticated 
} from '../components/Session'

import Home from '../components/Home'

import { getCoworks } from '../selectors'

import { doCoworkListUpdate } from '../actions'

const mapStateToProps = state => ({
	coworks: getCoworks(state)
})

export default compose(
	withEmailVerification,
	withAuthorization(userIsAuthenticated),
	connect(
		mapStateToProps,
		{ onCoworksUpdate: doCoworkListUpdate }
	)
)(Home)
