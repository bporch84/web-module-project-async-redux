import { combineReducers } from 'redux';

import {taylorSwiftReducer } from "./taylorSwiftReducer";
import {ronSwansonReducer } from "./ronSwansonReducer";

export const reducer = combineReducers({
    TSReducer: taylorSwiftReducer,
    RSReducer: ronSwansonReducer
});