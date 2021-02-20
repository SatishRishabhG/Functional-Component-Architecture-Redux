import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { countriesDataGridSaga } from './sagas';
import { countriesDataGridReducer } from './reducers';


export const store = () => {
    const sagaMiddleware = createSagaMiddleware();
    
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    let store = createStore(countriesDataGridReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));

    sagaMiddleware.run(countriesDataGridSaga);

    return store;
};