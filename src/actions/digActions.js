import { ADD_DIG, DIG_ERROR } from './types'

// ADD NEW DIG
export const addDig = (newDig) => async dispatch => {
    console.log('DIG', newDig)
    try {
        const res = await fetch('http://localhost:3000/digs', {
            method: 'POST',
            body: JSON.stringify(newDig),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        console.log('[digActions.js] DATA:', data)
        dispatch({
            type: ADD_DIG,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const digError = () => {
    return {
        type: DIG_ERROR
    }
}