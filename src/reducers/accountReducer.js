
const initialState = {
    loading: false,
    account: [],
    accounts: []
}

//napraviti reducer za edit account
export default function accountReducer (state = initialState, action){
    switch(action.type){
        case 'FETCH_ACCOUNTS':
        // console.log('reducer fetch accounts')
            return {
                ...state,
                loading: true
                // accounts: action.accounts
            }
        case 'FETCH_ACCOUNTS_SUCCESS':
        // console.log('reducer FETCH_ACCOUNTS_SUCCESS');
            return {
                ...state,
                loading: false,
                accounts: action.accounts
            }
        case 'FETCH_ACCOUNTS_FAILD':
            return {
                ...state,
                error: action.error
            }
        case "FETCH_ACCOUNTS_FOR_DASHBOARD":
            return {
                ...state,
                loading: true
            }
        case "FETCH_ACCOUNTS_FOR_DASHBOARD_SUCCESS":
            return {
                ...state,
                loading: false,
                accounts: action.payload
            }
        case "FETCH_ACCOUNTS_FOR_DASHBOARD_ERROR":
            return {
                ...state,
                error: action.payload
            }
        case 'FETCH_ACCOUNT_DETAILS':
            const index = state.accounts.findIndex(item => item.id == action.account);
            if(index > -1) {
                let accountF = state.accounts.find(item => item.id == action.account)
                // console.log('account in reducer: ',account);
                return{
                    // ...state,
                    accounts: state.accounts,
                    account: accountF
                }
            }
        case "EDIT_ACCOUNT":
            console.log('EDIT_ACCOUNT REDUCER', state.accounts)
            return {
                ...state,
                accounts: state.accounts
            }
        case "EDIT_ACCOUNT_ERROR":
            return {
                ...state,
                error: action.payload.error
            }
        case "EDIT_ACCOUNT_SUCCESS":
            return state.accounts.map((account) => {
                const accountId = parseInt(account.id);
                const actionId = parseInt(action.payload.id)
                console.log('accountId= ',accountId, 'actionId= ',actionId);
                if(accountId === actionId) {
                    console.log('EDIT_ACCOUNT_SUCCESS action.payload: ',action.payload)
                    return {
                        ...account,
                        accounts: action.payload
                        // name: action.payload.name.label,
                        // userId: action.payload.name.value,
                        // productDetails: action.payload.productDetails,
                        // totalDebit: action.payload.totalDebit,
                        // numberOfPayment: action.payload.numberOfPayment,
                        // monthlyDebit: action.payload.monthlyDebit,
                        // totalForPay: action.payload.totalForPay,
                        // startedPayment: action.payload.startedPayment
                    }
                }
            })
        case "DELETE_ACCOUNT":
            console.log('action: ',action)
            return {
                ...state,
                accounts: state.accounts.filter(item => item.id !== action.payload)
            }
        default:
            return state
    }
}