import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import AuthReducer from "./reducers/AuthReducer";
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
    Auth: AuthReducer,
})

const initialState = {};

const middlewares = [thunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

const enhancers = [middlewareEnhancer];
const composedEnhancers = compose(...enhancers);

const store = createStore(rootReducer, initialState, composedEnhancers);

store.dispatch({ type: 'INIT' });

export default store;