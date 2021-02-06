import {combaineReducers, combineReducers} from 'redux'
import userReducers from './user/reducers'

export default combineReducers ({
    user: userReducers
})