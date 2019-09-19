import { combineReducers } from 'redux'
import kitsReducer from './kitsReducer'

export default combineReducers({
    kits: kitsReducer
})