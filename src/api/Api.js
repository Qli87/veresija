import Async from 'react-async-await';
import axios from 'axios';


const instance = axios.create({
    baseURL: '/dsadad'
});

export function api_getTranslations() {
    //http://www.mocky.io/v2/5c825f0131000042411d1db4 - json
    //http://www.mocky.io/v2/5c821b8f310000a5211d1ba4 - react-localize-redux json example
    return axios.get("http://www.mocky.io/v2/5c8a8ba72e00002700d64d0b");
}

export function api_fetchAccounts() {
    // return axios.get("https://jsonplaceholder.typicode.com/posts");
    return axios.get("http://www.mocky.io/v2/5c17e1872f00005400af0e26");
}

export function api_fetchAccountsForDashboard() {
    return axios.get("http://www.mocky.io/v2/5c17e1872f00005400af0e26");
}

export function api_fetchUsers() {
    // console.log('api')
    // return axios.get("https://jsonplaceholder.typicode.com/users");
    return axios.get("http://www.mocky.io/v2/5c0e93f82e00004831043f73");

}

export function api_fetchUsersForDashboard() {
    return axios.get("http://www.mocky.io/v2/5c5b2a563900006200e05640");
}

export function api_fetchHistoryForAccount(accountId) {
    let accId = parseInt(accountId)
    return axios.get(`http://www.mocky.io/v2/5c364d033000005f0021b88d/${accId}`);
    // return axios.get(`http://www.mocky.io/v2/5c364d033000005f0021b88d/${accountId}`);
}

export function api_fetchHistoryForUser(userId){
    return axios.get(`http://www.mocky.io/v2/5c3851a73100007200a98f4b/${userId}`);
}

export function api_deleteUser(id) {
    return axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
}

export function api_editUser(user) {
    // console.log('api edit user: ',user);
    return axios.post(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
        name: user.name,
        username: user.username,
        desc: user.desc,
        phone: user.phone,
        email: user.email,
        address: user.address
    });
}

export function api_addUser(user) {
    console.log('api: ',user)
    return axios.post('https://jsonplaceholder.typicode.com/users', {
        firstName: user.firstName,
        lastName: user.lastName,
        description: user.description,
        phone: user.phone,
        email: user.email
    });
}

export function api_deleteAccount(id) {
    return axios.delete(`http://www.mocky.io/v2/5c17e1872f00005400af0e26/${id}`);
}

export function api_editAccount(account) {
    return axios.post(`https://jsonplaceholder.typicode.com/users/${account.id}`, {
        name: account.name.label,
        userId: account.name.value,
        productDetails: account.productDetails,
        totalDebit: account.totalDebit,
        numberOfPayment: account.numberOfPayment,
        monthlyDebit: account.monthlyDebit,
        totalForPay: account.totalForPay,
        startedPayment: account.startedPayment
    });
}

export function api_usersForSelect() {
    return axios.get("http://www.mocky.io/v2/5c1b52a733000068007fd6ce");
}

export function api_loginRequest(name, password) {
    const loginForm = new URLSearchParams();
    loginForm.append('name', name);
    loginForm.append('password', password);
    console.log("API: ",name,password)
    return axios.post('https://jsonplaceholder.typicode.com', loginForm);
}

// export async function api_fetchAccounts() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//         return response.json();
//     } catch (error) {
//         console.log(error);
//     }
// }

// export 
// async function api_fetchUsers() {
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         return response.json();
//     } catch (error) {
//         console.log(error);
//     }
// }