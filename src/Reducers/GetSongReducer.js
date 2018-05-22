import { GETSONG } from '../Actions/SongsAction';

export const GetSongReducer = (state={}, action) => {
    switch(action.type){
        case GETSONG:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}