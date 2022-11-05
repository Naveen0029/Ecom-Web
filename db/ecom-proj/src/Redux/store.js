import {createStore,applyMiddleware} from 'redux'
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagaMiddleware from '@redux-saga/core';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
    );

sagaMiddleware.run(productSaga);    
export default store;