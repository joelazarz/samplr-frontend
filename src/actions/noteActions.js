import { ADD_NOTE, NOTE_ERROR } from './types'

// ADD NEW NOTE
export const addNote = (newNote) => async dispatch => {
    try {
        const res = await fetch('https://sampler-backend.herokuapp.com/notes', {
            method: 'POST',
            body: JSON.stringify(newNote),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        dispatch({
            type: ADD_NOTE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const noteError = () => {
    return {
        type: NOTE_ERROR
    }
}