import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../configureStore';
import Note from '../stores/note'
import { getChordThunk } from './thunk'

export default function useChord() {
    const selectChord = useSelector((state: RootState) => state.chord).body;
    const dispatch = useDispatch();
    const getChord = () => { dispatch(getChordThunk())};

    return {
        selectChord,
        getChord
    }
}