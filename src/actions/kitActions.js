import { GET_KIT, SET_LOADING, KIT_ERROR} from './types'


// Get kit from server
export const getKit = (pathname) => async dispatch => {
    try {
    setLoading();
    const res = await fetch(`https://sampler-backend.herokuapp.com${pathname}`)
    const data = await res.json()
    dispatch({
        type: GET_KIT,
        payload: data
    })
    } catch (error) {
    dispatch({
        type: KIT_ERROR,
        payload:error.response.data
    })
    }
}

// this will set loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}

export const kitError = () => {
    return {
        type: KIT_ERROR
    }
}