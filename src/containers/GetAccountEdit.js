import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountEdit from '../components/AccountEdit'
import {fetchAccountDetails, fetchUsersForSelect, editAccount} from '../actions'


const mapStateToProps = state => ({
        account: state.accountReducer.accounts,
        userForSelect: state.userReducer.userForSelect
})

const mapDispatchToProps = dispatch => ({
    fetchAccountDetails: (id) => dispatch(fetchAccountDetails(id)),
    fetchUsersForSelect: () => dispatch(fetchUsersForSelect()),
    
    editAccount: (account) => dispatch(editAccount(account))
})


const GetAccountEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountEdit)


export default GetAccountEdit;