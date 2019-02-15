import { connect } from 'react-redux'
import { fetchUsersForSelect, fetchUsers } from '../actions' 
import AccountAdd from '../components/AccountAdd'

const mapStateToProps = state => ({
    accounts: state.accountReducer.accounts,
    userForSelect: state.userReducer.userForSelect,
    users: state.userReducer.fetchUsers
})

const mapDispatchToProps = dispatch => ({
    fetchUsersForSelect: () => dispatch(fetchUsersForSelect()),
    fetchUsers: () => dispatch(fetchUsers())
})

const AddAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountAdd)

export default AddAccount;