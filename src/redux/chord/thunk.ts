import axios from 'axios'
import { ThunkAction } from 'redux-thunk'
import { RootState } from '../configureStore'
import { ChordAction } from './type'
import { chordAsyncAction } from './action'

export function getChordThunk(): ThunkAction<void, RootState, null, ChordAction> {
    return async dispatch => {
        const { request, success, failure } = chordAsyncAction;
        dispatch(request());
        try {
            const response = await getChord();
            dispatch(success(response));
        } catch (e) {
            dispatch(failure(e));
        }
    }
}

async function getChord() {
    return await axios.get<>("http://localhost:8080");
}