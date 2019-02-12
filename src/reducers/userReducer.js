
const initialState = {
    loading: false,
    users: [],
    user: [],
    userForSelect: []
}

export default function userReducer(state = initialState, action) {
    switch(action.type){
        case 'FETCH_USERS':
            return {
                ...state,
                loading: true
            }
        case 'FETCH_USERS_SUCCESS':
            return {
                ...state,
                loading: false,
                users: action.users
            }
        case 'FETCH_USERS_FAILD':
            return {
                ...state,
                error: action.error
            }

        case "FETCH_USERS_FOR_DASHBOARD":
            return {
                ...state,
                // users: state.users,
                loading: true
            }
        case "FETCH_USERS_FOR_DASHBOARD_SUCCESS":
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case "FETCH_USERS_FOR_DASHBOARD_ERROR":
            return {
                ...state,
                error: action.payload
            }
        case "FETCH_USERS_FOR_SELECT":
            return {
                ...state,
                loading: true,
                users: action.payload   
            }
        case "FETCH_USERS_FOR_SELECT_SUCCESS":
            return{
                ...state,
                users: state.users,
                // users: action.payload.users,
                user: state.user,
                userForSelect: action.payload   
            }
        case "FETCH_USERS_FOR_SELECT_FAILD":
            return {
                ...state,
                error: action.payload
            }
        case 'FETCH_USER_DETAILS':
            const index = state.users.findIndex(item => item.id == action.user);
            if(index > -1){
                let user = state.users.find(item => item.id == action.user);
                return {
                    ...state,
                    users: state.users,
                    user: user
                    // ...state,
                    // users: user
                }
            } 
        case "LOGIN_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                //user
                users: action.payload.user
                // lastLogin: moment().toISOString()
            }
        case "LOGIN_ERROR":
            return {
                ...state,
                error: action.payload.error
            }
        case "EDIT_USER":
        const updatedItems = state.users.map(item => {
            const itemId = parseInt(item.id);
            const actionId = parseInt(action.payload.id)
            console.log('itemId: ',itemId, ' actionId: ',actionId);
            if(itemId === actionId){
                // return {...item, ...action.payload}
                // return {
                //     user: {...item, ...action.payload}
                // }
                console.log('== item: ',item)
                console.log('== action.payload: ',action.payload)
                return {
                    user: {...item, ...action.payload}
                }
                // return {...item, ...action.payload}

            }
            return item
        })
        // console.log('user:', updatedItems[action.payload.id])
        console.log('UPDATED USERS :', updatedItems)
        return {
            ...state,
            user: updatedItems[action.payload.id],
            users: updatedItems
        }
        case "DELETE_USER":
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.payload)
            }
        case "ADD_USER":
        console.log('ADD_USER')
            return {
                ...state,
                users: state.users,
                saving: true
            }
        case "ADD_USER_SUCCESS":
            console.log('ADD_USER_SUCCESS')
            return {
                ...state,
                users: [...state.users, action.payload]
            }
        case "ADD_USER_ERROR":
            return {
                ...state,
                error: action.payload.error
            }
        default:
            return state
    }
}


