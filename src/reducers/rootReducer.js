import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import userReducer from './userReducer'
import modalReducer from './modalReducer'
import historyReducer from './historyReducer'

export default combineReducers({
    accountReducer,
    userReducer,
    modalReducer,
    historyReducer
})