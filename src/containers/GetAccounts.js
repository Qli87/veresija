import { connect } from 'react-redux';
import AccountList from '../components/AccountList';
import { bindActionCreators } from 'redux';
import { fetchAccounts, deleteAccount } from '../actions'

const mapStateToProps = state => ({ accounts: state.accountReducer.accounts });

// const mapDispatchToProps = dispatch => bindActionCreators({fetchAccounts}, dispatch);

const mapDispatchToProps = dispatch => ({
    fetchAccounts: () => dispatch(fetchAccounts()),
    deleteAccount: (id) => dispatch(deleteAccount(id))
})

const GetAccounts = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountList)

export default GetAccounts;