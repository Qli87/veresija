import { combineReducers } from 'redux';
import accountReducer from './accountReducer';
import userReducer from './userReducer'
import modalReducer from './modalReducer'
import historyReducer from './historyReducer'
import mainReducer from './mainReducer'
import { localizeReducer } from 'react-localize-redux'


export default combineReducers({
    accountReducer,
    userReducer,
    modalReducer,
    historyReducer,
    localize: localizeReducer,
    mainReducer
})