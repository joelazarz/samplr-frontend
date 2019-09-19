import { combineReducers } from 'redux'
import discoveryReducer from './discoveryReducer'
import kitReducer from './kitReducer'

export default combineReducers({
    kits: discoveryReducer,
    kit: kitReducer
})