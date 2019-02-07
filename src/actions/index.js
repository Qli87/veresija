import axios from 'axios';
import { setAuthToken } from '../utils/setAuthToken'
export const FETCH_ACCOUNTS = 'FETCH_ACCOUNTS';
export const FETCH_ACCOUNTS_SUCCESS = 'FETCH_ACCOUNTS_SUCCESS';
export const FETCH_ACCOUNTS_FAILD = 'FETCH_ACCOUNTS_FAILD';
export const SET_PAGINATION = 'SET_PAGINATION';
export const FETCH_USERS_FOR_ACCOUNT = 'FETCH_USERS_FOR_ACCOUNT'
export const FETCH_USER_DETAILS = 'FETCH_USER_DETAILS'
export const FETCH_ACCOUNT_DETAILS = 'FETCH_ACCOUNT_DETAILS'
export const LOGIN_REQUEST = "LOGIN_REQUEST"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_ERROR = "LOGIN_ERROR"
export const OPEN_MODAL = "OPEN_MODAL"
export const CLOSE_MODAL = "CLOSE_MODAL"
export const DELETE_USER = "DELETE_USER"
export const DELETE_USER_ERROR = "DELETE_USER_ERROR"
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS"
export const EDIT_USER = "EDIT_USER"
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS"
export const EDIT_USER_ERROR = "EDIT_USER_ERROR"
export const FETCH_USERS_FOR_SELECT = "FETCH_USERS_FOR_SELECT"
export const FETCH_USERS_FOR_SELECT_SUCCESS = "FETCH_USERS_FOR_SELECT_SUCCESS"
export const FETCH_USERS_FOR_SELECT_FAILD = "FETCH_USERS_FOR_SELECT_FAILD"
export const ADD_USER = "ADD_USER"
export const ADD_USER_SUCCESS = "ADD_USER_SUCCESS"
export const ADD_USER_ERROR = "ADD_USER_ERROR"
export const FETCH_HISTORY_FOR_ACCOUNT = "FETCH_HISTORY_FOR_ACCOUNT"
export const FETCH_HISTORY_FOR_ACCOUNT_SUCCESS = "FETCH_HISTORY_FOR_ACCOUNT_SUCCESS"
export const FETCH_HISTORY_FOR_ACCOUNT_FAILD = "FETCH_HISTORY_FOR_ACCOUNT_ERROR"
export const FETCH_HISTORY_FOR_USER = "FETCH_HISTORY_FOR_USER"
export const FETCH_HISTORY_FOR_USER_SUCCESS = "FETCH_HISTORY_FOR_USER_SUCCESS"
export const FETCH_HISTORY_FOR_USER_FAILD = "FETCH_HISTORY_FOR_USER_FAILD"
export const FETCH_USERS_FOR_DASHBOARD_ERROR = "FETCH_USERS_FOR_DASHBOARD_ERROR"
export const FETCH_ACCOUNTS_FOR_DASHBOARD = "FETCH_ACCOUNTS_FOR_DASHBOARD"
export const FETCH_ACCOUNTS_FOR_DASHBOARD_SUCCESS = "FETCH_ACCOUNTS_FOR_DASHBOARD_SUCCESS"
export const FETCH_ACCOUNTS_FOR_DASHBOARD_ERROR = "FETCH_ACCOUNTS_FOR_DASHBOARD_ERROR"

export function fetchAccounts(accounts) {
    return{
        type: "FETCH_ACCOUNTS",
        accounts
    }
}

export function fetchAccountsSuccess(accounts) {
    return{
        type: "FETCH_ACCOUNTS_SUCCESS",
        accounts
    }
}

export function fetchAccountsFaild(error) {
    return{
        type: "FETCH_ACCOUNTS_FAILD",
        error
    }
}


export function fetchUsers(users) {
    return{
        type: "FETCH_USERS",
        users
    }
}

export function fetchUsersSuccess(users) {
    return{
        type: "FETCH_USERS_SUCCESS",
        users
    }
}


export function fetchUsersFaild(error) {
    return{
        type: "FETCH_USERS_FAILD",
        error
    }
}

export function fetchUsersForDashboard(users) {
    console.log("FETCH_USERS_FOR_DASHBOARD")
    return {
        type: "FETCH_USERS_FOR_DASHBOARD",
        payload: users
    }
}

export function fetchUsersForDashboard_success(users) {
    console.log("FETCH_USERS_FOR_DASHBOARD_SUCCESS")
    return {
        type: "FETCH_USERS_FOR_DASHBOARD_SUCCESS",
        payload: users
    }
}

export function fetchUsersForDashboard_error(error) {
    return {
        type: "FETCH_USERS_FOR_DASHBOARD",
        payload: error
    }
}
    
export function fetchUsersForAccount(users) {
    return {
        type: "FETCH_USERS_FOR_ACCOUNT",
        users
    }
}

export function fetchUserDetails(user) {
    return {
        type: "FETCH_USER_DETAILS",
        user
    }
}

export function fetchAccountsForDashboard(accounts) {
    return{
        type: "FETCH_ACCOUNTS_FOR_DASHBOARD",
        payload: accounts
    }
}

export function fetchAccountsForDashboard_success(accounts) {
    return{
        type: "FETCH_ACCOUNTS_FOR_DASHBOARD_SUCCESS",
        payload: accounts
    }
}

export function fetchAccountsForDashboard_error(error) {
    return{
        type: "FETCH_ACCOUNTS_FOR_DASHBOARD_ERROR",
        payload: error
    }
}

export function fetchAccountDetails(account) {
    // console.log('action acount:', account);
    return {
        type: "FETCH_ACCOUNT_DETAILS",
        account
    }
}

export function loginRequest(name, password){
    return {
        type: "LOGIN_REQUEST",
        payload: {
            name,
            password
        }
    }
}

export function loginSuccess(user) {
    return {
        type: "LOGIN_SUCCESS",
        payload: user
    }
}

export function loginError(error) {
    return{
        type: "LOGIN_ERROR",
        payload: error
    }
}

export function openModal(modal) {
    return {
        type: "OPEN_MODAL",
        modal
    }
}

export function closeModal(modal) {
    return {
        type: "CLOSE_MODAL",
        modal
    }
}

export function editUser(user) {
    // console.log('ACTION EDIT USER: ',user)
    return {
        type:"EDIT_USER",
        payload: user
    }
}

export function editUser_success(user) {
    return {
        type:"EDIT_USER_SUCCESS",
        payload: user
    }
}

export function editUser_error(error) {
    return {
        type:"EDIT_USER_ERROR",
        payload: error
    }
}

export function deleteUser(id){
    return {
        type: "DELETE_USER",
        payload: id
    }
}

export function deleteUser_error(error){
    return {
        type: "DELETE_USER_ERROR",
        payload: error
    }
}

export function deleteUser_success(id){
    return {
        type: "DELETE_USER_SUCCESS",
        payload: id
    }
}


export function fetchUsersForSelect(users) {
    return{
        type: "FETCH_USERS_FOR_SELECT",
        payload: users
    }
}

export function fetchUsersForSelectSuccess(users) {
    return{
        type: "FETCH_USERS_FOR_SELECT_SUCCESS",
        payload: users
    }
}

export function fetchUsersForSelectFaild(error) {
    return{
        type: "FETCH_USERS_FOR_SELECT_FAILD",
        payload: error
    }
}


export function editAccount(account) {
    return {
        type:"EDIT_ACCOUNT",
        payload: account
    }
}

export function editAccount_success(account) {
    return {
        type:"EDIT_ACCOUNT_SUCCESS",
        payload: account
    }
}

export function editAccount_error(account) {
    return {
        type:"EDIT_ACCOUNT_ERROR",
        payload: account
    }
}

export function deleteAccount(id){
    return {
        type: "DELETE_ACCOUNT",
        payload: id
    }
}

export function deleteAccount_error(error){
    return {
        type: "DELETE_ACCOUNT_ERROR",
        payload: error
    }
}

export function deleteAccount_success(id){
    return {
        type: "DELETE_ACCOUNT_SUCCESS",
        payload: id
    }
}

export function addUser(user){
    console.log('add user')
    console.log('user: ',user)
    return{
        type: "ADD_USER",
        payload: user
    }
}

export function addUser_success(user){
    console.log('add user success')
    return{
        type: "ADD_USER_SUCCESS",
        payload: user
    }
}

export function addUser_error(error){
    console.log('add user error')

    return{
        type: "ADD_USER_ERROR",
        payload: error
    }
}

export function fetchHistoryForAccount(accountId){
    return {
        type: "FETCH_HISTORY_FOR_ACCOUNT",
        payload: accountId
    }
}

export function fetchHistoryForAccount_success(accountId){
    return {
        type: "FETCH_HISTORY_FOR_ACCOUNT_SUCCESS",
        payload: accountId
    }
}

export function fetchHistoryForAccount_faild(error){
    return {
        type: "FETCH_HISTORY_FOR_ACCOUNT_FAILD",
        payload: error
    }
}

export function fetchHistoryForUser(userId){
    return {
        type: "FETCH_HISTORY_FOR_USER",
        payload: userId
    }
}

export function fetchHistoryForUser_success(userId){
    console.log("ACTION: ",userId)
    return {
        type: "FETCH_HISTORY_FOR_USER_SUCCESS",
        payload: userId
    }
}

export function fetchHistoryForUser_faild(error){
    return {
        type: "FETCH_HISTORY_FOR_USER_FAILD",
        payload: error
    }
}




// export function login(data) {
//     // return dispatch => {
//         return axios.post('https://jsonplaceholder.typicode.com/posts?userId=1', data).then(res => {
//             const token = res.data.token;
//             localStorage.setItem('jwtToken', token);
//             setAuthToken(token)
//         })
//     // }
// }