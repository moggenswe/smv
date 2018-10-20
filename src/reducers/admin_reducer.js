import {ADD_POSTS} from '../actions/media';
import {ERROR} from '../actions/media';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action ) {
	
    switch( action.type ) {
        case "dfssdf":
        	return {...state};
        default:
            return state;
    }
}
