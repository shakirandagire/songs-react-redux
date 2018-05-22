import { combineReducers } from 'redux';
import { AddSongReducer } from './AddSongReducer';
import { GetSongReducer } from './GetSongReducer';


const rootReducer = combineReducers({
    AddSongReducer,
    GetSongReducer,

})
export default rootReducer;

