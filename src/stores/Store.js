import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../Reducers';

//Application store
const createStoreWithMiddleware = composeWithDevTools(applyMiddleware( ReduxThunk, promiseMiddleware))(createStore); //logger,
export const store = createStoreWithMiddleware(rootReducer)