import { connect } from 'react-redux'

import BaseAdminPage from '../components/Admin'

import { getFirebase } from '../selectors'

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const AdminPage = connect(mapStateToProps)(BaseAdminPage)

export default AdminPage