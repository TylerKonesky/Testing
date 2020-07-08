import {SAVE_COMMENT, FETCH_COMMENTS} from 'actions/types';
import axios from 'axios';
import { CHANGE_AUTH } from './types';

export function saveComment(comment){
    return {
        type:SAVE_COMMENT,
        payload: comment
    }
}

export function fetchComments(){
    const response = axios.get('https://jsonplaceholder.typicode.com/comments');
    return{
        type: FETCH_COMMENTS,
        payload: response

    }
}

export function changeAuth(isLoggedIn){
    return{
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}

