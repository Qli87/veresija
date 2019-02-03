import { connect } from 'react-redux'
import AccountHistory from '../components/AccountHistory';
import { fetchHistoryForAccount } from '../actions';


const mapStateToProps = state => ({ accounts: state.historyReducer.accounts });


const mapDispatchToProps = dispatch => ({
    fetchHistory: (id) => dispatch(fetchHistoryForAccount(id))
})

const HistoryAccount = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountHistory)

export default HistoryAccount