import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchUserDetails} from '../actions'
import UserEdit from '../components/UserEdit'
import { editUser, fetchUsers } from '../actions'


const mapStateToProps = state => ({
        user: state.userReducer.user,
        users: state.userReducer.users
        // user: state.userReducer.users
})

const mapDispatchToProps = dispatch => ({
        fetchUserDetails: (id) => dispatch(fetchUserDetails(id)),
        editUser: (user) => dispatch(editUser(user))
        // fetchUsers: () => dispatch(fetchUsers())
})

const GetUserEdit = connect(
    mapStateToProps,
    mapDispatchToProps
)(UserEdit)


export default GetUserEdit;