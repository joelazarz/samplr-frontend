import { GET_KITS, SET_LOADING, KITS_ERROR, ADD_KIT } from './types'


// Get kits from server
export const getKits = () => async dispatch => {
    try {
    setLoading();
    const res = await fetch('https://sampler-backend.herokuapp.com/kits')
    const data = await res.json()
    dispatch({
        type: GET_KITS,
        payload: data
    })
    } catch (error) {
    dispatch({
        type: KITS_ERROR,
        payload:error.respose.data
    })
    }
}


// ADD NEW KIT
export const addKit = (newKit) => async dispatch => {
    try {
    setLoading();
    const res = await fetch('https://sampler-backend.herokuapp.com/kits', {
        method: 'POST',
        body: JSON.stringify(newKit),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await res.json()
    dispatch({
        type: ADD_KIT,
        payload: data
    })
    } catch (error) {
    dispatch({
        type: KITS_ERROR,
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

export const kitsError = () => {
    return {
        type: KITS_ERROR
    }
}