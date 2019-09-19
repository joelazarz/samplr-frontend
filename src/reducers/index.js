import { combineReducers } from 'redux'
import discoveryReducer from './discoveryReducer'

export default combineReducers({
    kits: discoveryReducer
})