import { GET_KIT, SET_LOADING, KIT_ERROR } from '../actions/types'

const initialState = {
    kit: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_KIT:
            return {
                ...state,
                kit: action.payload,
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case KIT_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}