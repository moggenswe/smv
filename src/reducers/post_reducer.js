import * as actionTypes from '../actions/actionTypes'


const INITIAL_STATE = { all: null, post: null, loaded:false };

export default function(state = INITIAL_STATE, action ) {
	
	switch( action.type ) {
		case actionTypes.FETCH_POSTS:
			return { ...state, all: action.payload.data, loaded:true };
		case actionTypes.ERROR:
			return state
		default:
			return state;
	}
}
