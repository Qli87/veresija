import { connect } from 'react-redux'
import { fetchUsersForDashboard, fetchAccountsForDashboard } from '../actions';
import Dashboard from '../components/Dashboard'

const mapStateToProps = state => (console.log('users state: ', state),{
    users: state.userReducer.users,
    accounts: state.accountReducer.accounts
});

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(fetchUsersForDashboard()),
    fetchAccounts: () => dispatch(fetchAccountsForDashboard())
})

const DashboardContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Dashboard)

export default DashboardContainer;