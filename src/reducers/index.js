import { combineReducers } from 'redux'

import { CHANGE_TAB_NAME, FETCH_POSTS_REQUEST,FETCH_POSTS_FAILURE,FETCH_POSTS_SUCCESS} from '../actions/actionsType';


function changeTabname(state = 'HOME', action){
    switch(action.type){
        case CHANGE_TAB_NAME: 
            return action.name
        default: 
            return state;
    }
}

function asyncGetData(state = {
    isFetch: false
}, action){
    switch(action.type){
        case FETCH_POSTS_REQUEST:
            return {
                isFetch: true,
            }
        case FETCH_POSTS_SUCCESS: 
            return {...state,resData: action.res}
        default: 
            return state;
    }
}

export default combineReducers({
  name: changeTabname,
  asyncData: asyncGetData
})