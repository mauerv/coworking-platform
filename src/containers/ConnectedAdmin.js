import { connect } from 'react-redux'

import Admin from '../components/Admin'

import { getFirebase } from '../selectors'

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const ConnectedAdmin = connect(mapStateToProps)(Admin)

export default ConnectedAdmin