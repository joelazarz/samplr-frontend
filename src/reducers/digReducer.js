import { ADD_DIG, DIG_ERROR } from '../actions/types'

const initialState = {
    digs: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_DIG:
            return {
                ...state,
                digs: [...state.digs, action.payload],
            }
            case DIG_ERROR:
                    return {
                        ...state,
                        error: action.payload
                    }
                default:
                    return state;
    }

}