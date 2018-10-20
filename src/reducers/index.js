import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import AdminReducer from './admin_reducer'

const rootReducer = combineReducers({
  posts: PostReducer,
  items: AdminReducer
});

export default rootReducer;
