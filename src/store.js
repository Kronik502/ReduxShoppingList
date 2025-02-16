// src/store.js
import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import shoppingListReducer from './reducers/shoppingListReducer';

const store = createStore(shoppingListReducer, applyMiddleware(thunk));

export default store;
