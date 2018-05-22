import { ADDSONG } from '../Actions/SongsAction';

export const AddSongReducer = (state={}, action) => {
    switch(action.type){
        case ADDSONG:
            return action.data;
        default:
            return state;
    }
}