import { createReducer } from 'typesafe-actions'
import { ChordAction } from './type'
import { CHORD_REQ_ACTION, CHORD_SUCCESS_ACTION, CHORD_ERROR_ACTION } from './action'
import Response from '../stores/response'
import Note from '../stores/note'

const chord = createReducer<Response<{ chord: string, notes: Array<Note> }>, ChordAction>(new Response(), {
    [CHORD_REQ_ACTION]: state => ({
        ...state
    }),
    [CHORD_SUCCESS_ACTION]: (state, action) => {
        return { ...state }
    },
    [CHORD_ERROR_ACTION]: (state, action) => {
        return { ...state }
    }
})

export default chord;