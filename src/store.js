import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers/rootReducer'
import { watchFetchAccounts } from './saga/saga'
import { composeWithDevTools } from 'redux-devtools-extension';



const sagaMiddleware = createSagaMiddleware()

export default createStore(
    rootReducer, 
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(watchFetchAccounts);