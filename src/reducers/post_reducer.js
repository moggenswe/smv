import * as actionTypes from '../actions/actionTypes'


const INITIAL_STATE = { all: null, post: null, loaded:false };

export default function(state = INITIAL_STATE, action ) {
	
	switch( action.type ) {
		case actionTypes.FETCH_POSTS:
			return { ...state, all: action.payload.data, loaded:true };
		case actionTypes.ERROR:
			return state
		case actionTypes.ADD_POSTS:
            return {...state, all: { BloggItems: state.all.BloggItems.concat( action.payload ) } };
        case actionTypes.DELETE_POST:
        	console.log(state.all.BloggItems);
        	console.log(state.all.BloggItems.filter(item => item.id !== 1));
            return {...state };
        case actionTypes.UPDATE_POST:
        	
        	return state.all.BloggItems.map( item => {
        		if(item.id !== action.payload.id ) {
        			//item.header = action.payload.header;
        			//item.header = action.payload.header;
        			//item.header = action.payload.header;
        			return item;

        		}

        		return {...item, ...action.payload.data};
        	});
		default:
			return state;
	}
}
