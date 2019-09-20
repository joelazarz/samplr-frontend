import { GET_KITS, SET_LOADING, KITS_ERROR, ADD_KIT } from '../actions/types'

const initialState = {
    kits: null,
    loading: false
}

export default (state = initialState, action) => {
    switch(action.type) {
        case GET_KITS:
            return {
                ...state,
                kits: action.payload,
                loading: false
            }
        case ADD_KIT:
                return {
                    ...state,
                    kits: [...state.kits, action.payload],
                    loading: false
                }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case KITS_ERROR:
            console.error(action.payload)
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}