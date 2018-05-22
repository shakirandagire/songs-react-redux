import axios from 'axios';
import { notify } from 'react-notify-toast';

const BASE_URL = 'http://127.0.0.1:5000'
export const ADDSONG = 'addsong';
export const GETSONG = 'getsong';

const AddSong=(response)=>{
    type: ADDSONG;
    payload: response.data.message;
}

const GetSong=(response)=>{
    type: GETSONG;
    payload: response.data;
}

export const AddSongAction = (data)=>{
    return async(dispatch)=> {
        await axios.post(`http://127.0.0.1:5000/api/songs`, data)
        .then(response=>{
            dispatch(AddSong);
            notify.show(response.data.message)
        })
        .catch(errors=>{
            notify.show(response.data.message)
        })
    }

}

export const GetSongAction = (data)=>{
    return async(dispatch)=> {
        await axios.post(`http://127.0.0.1:5000/api/songs`, data)
        .then(response=>{
            dispatch(GetSong);
            notify.show(response.data.message)
        })
        .catch(errors=>{
            notify.show(response.data.message)
        })
    }

}