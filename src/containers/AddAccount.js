import { connect } from 'react-redux'
import { fetchUsersForSelect } from '../actions' 
import AccountAdd from '../components/AccountAdd'

const mapStateToProps = state => ({
    accounts: state.accountReducer.accounts,
    userForSelect: state.userReducer.userForSelect
})

const mapDispatchToProps = dispatch => ({
    fetchUsersForSelect: () => dispatch(fetchUsersForSelect())
})

const AddAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountAdd)

export default AddAccount;