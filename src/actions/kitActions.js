import { GET_KIT, SET_LOADING, KIT_ERROR} from './types'


// Get kits from server
export const getKit = () => async dispatch => {
    try {
    setLoading();
    // kit 1 is hard coded right now - figure out how to interpolate the id of whatever kit is called into this function
    const res = await fetch('/kits/1')
    const data = await res.json()
    dispatch({
        type: GET_KIT,
        payload: data
    })
    } catch (error) {
    dispatch({
        type: KIT_ERROR,
        payload:error.respose.data
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