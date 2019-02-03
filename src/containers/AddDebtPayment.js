import { connect } from 'react-redux';
import Account_debtPayment from '../components/Account_debtPayment'
import {fetchAccountDetails} from '../actions'


const mapStateToProps = state => ({
    account: state.accountReducer.accounts
})

const mapDispatchToProps = dispatch => ({
    fetchAccountDetails: (id) => dispatch(fetchAccountDetails(id))
})


const AddDebtPayment = connect(
    mapStateToProps,
    mapDispatchToProps
)(Account_debtPayment)


export default AddDebtPayment;