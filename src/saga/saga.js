import { call, takeEvery, put } from 'redux-saga/effects';
import { api_fetchUsers, 
        api_loginRequest, 
        api_fetchAccounts,
        api_deleteUser,
        api_editUser,
        api_usersForSelect,
        api_editAccount,
        api_deleteAccount,
        api_addUser,
        api_fetchHistoryForAccount,
        api_fetchHistoryForUser,
        api_fetchUsersForDashboard,
        api_fetchAccountsForDashboard,
        api_getTranslations
} from '../api/Api';

import {fetchAccountsSuccess, 
        fetchAccountsFaild,
        fetchUsersSuccess,
        fetchUsersFaild,
        loginError,
        loginSuccess,
        deleteUser_error,
        deleteUser_success,
        deleteUser,
        editUser_error,
        editUser_success,
        fetchUsersForSelectSuccess,
        fetchUsersForSelectFaild,
        editAccount_error,
        editAccount_success,
        deleteAccount_success,
        deleteAccount_error,
        addUser_error,
        addUser_success,
        fetchHistoryForAccount_faild,
        fetchHistoryForAccount_success,
        fetchHistoryForUser_faild,
        fetchHistoryForUser_success,
        fetchUsersForDashboard_error,
        fetchUsersForDashboard_success,
        fetchAccountsForDashboard_error,
        fetchAccountsForDashboard_success,
        getTranslations_error,
        getTranslations_success
} from '../actions'


export function* getTranslationsSaga() {
    const response = yield call(api_getTranslations);
    if(!response || !response.data){
        return yield put(getTranslations_error("Internal server error - getTranslations"))
    }
    if(response.status === 200){
        return yield put(getTranslations_success(response.data))
    } else {
        return yield put(getTranslations_error("Error getTranslations"))
    }
}

export function* editAccountSaga(action) {
    console.log('saga edit account: ',action.payload)
    const response = yield call(api_editAccount, action.payload);
    if(!response || !response.data){
        return yield put(editAccount_error("Internal server error edit account saga"));
    }
    if(response.status === 200){
        return yield editAccount_success(action.payload);
    } else {
        return yield put(editAccount_error('Error edit account saga'));
    }
}

export function* fetchUsersForSelectSaga() {
    const response = yield call(api_usersForSelect);
    if(!response || !response.data){
        return yield put(fetchUsersForSelectFaild('Internal server error fetch users for select saga'))
    }
    if(response.status === 200){
        return yield put(fetchUsersForSelectSuccess(response.data))
    } else {
        return yield put(fetchUsersForSelectFaild('Error fetch users for select saga'))
    }
}


export function* fetchUsersForDashboardSaga() {
    const response = yield call(api_fetchUsersForDashboard);
    if(!response || !response.data) {
        return yield put(fetchUsersForDashboard_error("Internal server error fetch users for dashboard saga"))
    }
    if(response.status === 200){
        return yield put(fetchUsersForDashboard_success(response.data))
    } else {
        return yield put(fetchUsersForDashboard_error('error fetch users for dashboard saga'))
    }
}

export function* addUserSaga(action) {
    console.log('saga begining')
    const response = yield call(api_addUser, action.payload)
    console.log('response:',response);
    if(!response || !response.data){
        console.log('error1')
        return yield put(addUser_error("Internal server error add user saga"))
    }
    if(response.status === 200){
        return yield put(addUser_success(response.data))
    } else {
        return yield put(addUser_error('error add user saga'))
    }
}

export function* editUserSaga(action) {
    // console.log('edit saga action: ',action);
    const response = yield call(api_editUser, action.payload);
    if(!response || !response.data){
        return yield put(editUser_error("Internal server error edit user saga"));
    }
    if(response.status === 200){
        // console.log('status === 200');
        return yield editUser_success(action.payload);
    } else {
        // console.log('status !== 200');
        return yield put(editUser_error('Error edit user saga'));
    }
}

export function* deleteUserSaga(action) {
    console.log('Saga delete user, action:' ,action);
    const response = yield call(api_deleteUser, action.payload);
    if(!response || !response.data) {
        console.log('Internal server error');
        return yield put(deleteUser_error('Internal server error delete user saga'));
    }
    if(response.status === 200) {
        console.log('status 200');
        return yield put(deleteUser_success(action.payload))
    } else {
        console.log('status !== 200')
        return yield put(deleteUser_error('Error delete user saga'));
    }
}

export function* fetchHistoryForUserSaga(action) {
    const response = yield call(api_fetchHistoryForUser, action.payload)
    if(!response || !response.data) {
        return yield put(fetchHistoryForUser_faild('Internal server error fetch history for user saga'))
    }
    if(response.status === 200){
        return yield put(fetchHistoryForUser_success(response.data))
    } else {
        return yield put(fetchHistoryForUser_faild('error fetch history for user saga'))
    }
}

export function* loginSaga(action) {
    let {name, password} = action.payload;
    const response = yield call(api_loginRequest, name, password);
    if(!response || !response.data) {
        return yield put(loginError('Internal server error login saga'));
    }
    if(response.status === 200){
        console.log('response.data: ', response.data);
        // sessionStorage.setItem('token', response.data.token);
        return yield put(loginSuccess(response.data))
    } else {
        return yield put(loginError('error login saga'));
    }
}
    

export function* fetchAccounts() {
    const response = yield call(api_fetchAccounts);
      if(!response || !response.data) {
          return yield put(fetchAccountsFaild("Internal server error fetch accounts"))
      }
      if(response.status === 200) {
        return yield put(fetchAccountsSuccess(response.data))
      }
      if(response.status === 400) {
        return yield put(fetchAccountsFaild(response.error))
      }   
}


export function* fetchAccountsForDashboardSaga() {
    const response = yield call(api_fetchAccountsForDashboard);
    if(!response || !response.data){
        return yield put(fetchAccountsForDashboard_error("Internal server error fetch accounts for dashboard saga"))
    }
    if(response.status === 200){
        return yield put(fetchAccountsForDashboard_success(response.data))
    } else {
        return yield put(fetchAccountsForDashboard_error('error fetch accounts for dashboard saga'))
    }
}

export function* fetchHistoryForAccountSaga(action) {
    const response = yield call(api_fetchHistoryForAccount, action.payload)
    // console.log('SAGA RESPONSE: ', response.data)
    if(!response || !response.data){
        return yield put(fetchHistoryForAccount_faild("Internal server error fetch history for account saga"))
    }
    if(response.status === 200){
        return yield put(fetchHistoryForAccount_success(response.data))
    } else {
        return yield put(fetchHistoryForAccount_faild(response.error))
    }
}

export function* deleteAccountSaga(action) {
    console.log('Saga delete account, action:' ,action);
    const response = yield call(api_deleteAccount, action.payload);
    if(!response || !response.data) {
        console.log('Internal server error');
        return yield put(deleteAccount_error('Internal server error delete account saga'));
    }
    if(response.status === 200) {
        console.log('status 200');
        return yield put(deleteAccount_success(action.payload))
    } else {
        console.log('status !== 200')
        return yield put(deleteAccount_error('Error delete account saga'));
    }
}

export function* fetchUsers() {
    // console.log('SAGA fetch users')
    const response = yield call(api_fetchUsers);
    // console.log('REPSONSE: ', response);    
        if(!response || !response.data) {
            return yield put(fetchUsersFaild("Internal server error fetch users"))
        }
        // console.log('RESPONSE STATUS: ', response.status)
        if(response.status === 200) {
         return yield put(fetchUsersSuccess(response.data))
        }
        if(response.status === 400) {
            return yield put(fetchUsersFaild(response.error))
        }
}


//label, value json for select option...accoundAdd
export function* fetchUsersForAccount() {
    const response = yield call(api_fetchUsers);
    if(!response || !response.data) {
        return yield put(fetchUsersFaild("Internal server error fetch users for account"))
    }
    if(response.status === 200) {
        return yield put(fetchUsersSuccess(response.data))
    }
    if(response.status === 400) {
        return yield put(fetchUsersFaild(response.error))
    }
}


export function* watchFetchAccounts() {
    yield takeEvery("FETCH_ACCOUNTS", fetchAccounts);
    yield takeEvery("FETCH_USERS", fetchUsers);
    yield takeEvery("FETCH_USERS_FOR_ACCOUNT", fetchUsersForAccount);
    yield takeEvery("LOGIN_REQUEST", loginSaga);
    yield takeEvery("DELETE_USER", deleteUserSaga);
    yield takeEvery("EDIT_USER", editUserSaga);
    yield takeEvery("FETCH_USERS_FOR_SELECT", fetchUsersForSelectSaga);
    yield takeEvery("EDIT_ACCOUNT", editAccountSaga);
    yield takeEvery("ADD_USER", addUserSaga);    
    yield takeEvery("FETCH_HISTORY_FOR_ACCOUNT", fetchHistoryForAccountSaga),
    yield takeEvery("FETCH_HISTORY_FOR_USER", fetchHistoryForUserSaga),
    yield takeEvery("FETCH_USERS_FOR_DASHBOARD", fetchUsersForDashboardSaga),
    yield takeEvery("FETCH_ACCOUNTS_FOR_DASHBOARD", fetchAccountsForDashboardSaga),
    yield takeEvery("GET_TRANSLATIONS", getTranslationsSaga)
}