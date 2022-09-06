import {createStore, applyMiddleware,compose} from 'redux';
import Thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(reducers, {}, composeEnhancers(applyMiddleware(Thunk,logger)));
