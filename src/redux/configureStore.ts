import { combineReducers } from 'redux';

import chord from './chord/reducer';

const rootReducer = combineReducers({
    chord
})

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;