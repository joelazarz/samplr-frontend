import { GET_KITS, SET_LOADING, KITS_ERROR, ADD_KIT } from './types'


// Get kits from server
export const getKits = () => async dispatch => {
    try {
    setLoading();
    const res = await fetch('/kits')
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

// Add new Kit
export const addKit = (kit) => async dispatch => {
    try {
    setLoading();
    const res = await fetch('/kits', {
        method: 'POST',
        body: JSON.stringify(kit),
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

export const kitsError = () => {
    return {
        type: KITS_ERROR
    }
}