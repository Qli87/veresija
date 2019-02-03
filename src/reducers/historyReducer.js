const initialState = {
    loading: false,
    accounts: []
}

export default function historyReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_HISTORY_FOR_ACCOUNT":
            return {
                loading: true,
                accounts: []
            }
        case "FETCH_HISTORY_FOR_ACCOUNT_SUCCESS":
            return {
                ...state,
                loading: false,
                accounts: action.payload
            }
        case "FETCH_HISTORY_FOR_ACCOUNT_FAILD":
            return {
                ...state,
                error: action.payload
            }
        case "FETCH_HISTORY_FOR_USER":
            return {
                ...state,
                loading: true
            }
        case "FETCH_HISTORY_FOR_USER_SUCCESS":
            return {
                ...state,
                loading: false,
                accounts: action.payload
            }
        case "FETCH_HISTORY_FOR_USER_FAILD":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}