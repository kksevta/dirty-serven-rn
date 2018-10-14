import { combineReducers } from 'redux'

import { app } from './app-reducer';

const RootReducer = combineReducers({
    app
})

export { RootReducer }