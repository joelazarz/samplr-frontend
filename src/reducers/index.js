import { combineReducers } from 'redux'
import discoveryReducer from './discoveryReducer'
import kitReducer from './kitReducer'
import noteReducer from './noteReducer'
import digReducer from './digReducer'

export default combineReducers({
    kits: discoveryReducer,
    kit: kitReducer,
    digs: digReducer,
    notes: noteReducer
})