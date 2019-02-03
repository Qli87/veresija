import { connect } from 'react-redux'
import UserHistory from '../components/UserHistory'
import { fetchHistoryForUser } from '../actions';

const mapStateToProps = state => ({ 
    accounts: state.historyReducer.accounts
})

const mapDispatchToProps = dispatch => ({
    fetchHistory: (id) => dispatch(fetchHistoryForUser(id))
})

const HistoryUser = connect (
    mapStateToProps,
    mapDispatchToProps
)(UserHistory)

export default HistoryUser