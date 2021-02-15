import { createAsyncAction } from 'typesafe-actions';
import { AxiosError, AxiosResponse } from 'axios'

export const CHORD_REQ_ACTION = 'CHORD_REQ_ACTION' as const
export const CHORD_SUCCESS_ACTION = 'CHORD_SUCCESS_ACTION' as const
export const CHORD_ERROR_ACTION = 'CHORD_ERROR_ACTION' as const

export const chordReqAction = () => ({
    type: CHORD_REQ_ACTION
})

export const chordSuccessAction = (response: AxiosResponse) => ({
    type: CHORD_SUCCESS_ACTION,
    payload: response
})

export const chordErrorAction = (error: AxiosError) => ({
    type: CHORD_ERROR_ACTION,
    payload: error
})

export const chordAsyncAction = createAsyncAction(
    CHORD_REQ_ACTION,
    CHORD_SUCCESS_ACTION,
    CHORD_ERROR_ACTION
)<undefined, AxiosResponse, AxiosError>();