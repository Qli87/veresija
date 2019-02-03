import React, { Component } from 'react';
import { connect } from 'react-redux';
import AccountDetails from '../components/AccountDetails'
import {fetchAccountDetails} from '../actions'


const mapStateToProps = state => ({
        account: state.accountReducer.accounts
})

const mapDispatchToProps = dispatch => ({
    fetchAccountDetails: (id) => dispatch(fetchAccountDetails(id))
})


const GetAccountDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(AccountDetails)


export default GetAccountDetails;