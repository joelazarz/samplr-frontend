import { ADD_NOTE, NOTE_ERROR } from '../actions/types'

const initialState = {
    notes: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, action.payload],
            }
        case NOTE_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }

}