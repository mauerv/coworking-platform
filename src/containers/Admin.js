import { connect } from 'react-redux'
import { getFirebase } from '../selectors'

import BaseAdminPage from '../components/Admin'

const mapStateToProps = state => ({
	firebase: getFirebase(state)
})

const AdminPage = connect(mapStateToProps)(BaseAdminPage)

export default AdminPage