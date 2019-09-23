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
export const addKit = (newKit) => async dispatch => {
    try {
    setLoading();
    console.log('addKit KIT', newKit)
    const res = await fetch('http://localhost:3000/kits', {
        method: 'POST',
        body: JSON.stringify(newKit)
    })
    const data = await res.json()
    console.log('[discoveryActions.js] DATA:', data)
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