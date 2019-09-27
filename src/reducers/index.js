import { combineReducers } from 'redux'
import discoveryReducer from './discoveryReducer'
import kitReducer from './kitReducer'
import digReducer from './digReducer'

export default combineReducers({
    kits: discoveryReducer,
    kit: kitReducer,
    digs: digReducer
})