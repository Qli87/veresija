import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountEdit from '../components/AccountEdit'
import {fetchAccountDetails, fetchUsersForSelect, editAccount, fetchUsersForDashboard} from '../actions'


const mapStateToProps = state => ({
        account: state.accountReducer.account,
        userForSelect: state.userReducer.userForSelect
})

const mapDispatchToProps = dispatch => ({
    fetchAccountDetails: (id) => dispatch(fetchAccountDetails(id)),
    fetchUsersForSelect: () => dispatch(fetchUsersForSelect()),
    //pozvati fetchUsers
    fetchUsersForDashboard: () => dispatch(fetchUsersForDashboard()),
    editAccount: (account) => dispatch(editAccount(account))
})


const GetAccountEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountEdit)


export default GetAccountEdit;