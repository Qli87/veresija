import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserDetails from '../components/UserDetails'
import {fetchUserDetails} from '../actions'
import UserEdit from '../components/UserEdit'


const mapStateToProps = state => ({
        user: state.userReducer.user
        // user: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
        fetchUserDetails: (id) => dispatch(fetchUserDetails(id))
})

const GetUserDetails = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserDetails)


export default GetUserDetails;