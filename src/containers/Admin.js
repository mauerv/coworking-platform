import { connect } from 'react-redux'

import BaseAdminPage from '../components/Admin'

const mapStateToProps = state => ({
	firebase: state.firebase
})

const AdminPage = connect(mapStateToProps)(BaseAdminPage)

export default AdminPage