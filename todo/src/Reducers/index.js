import { combineReducers } from './node_modules/redux';
import todosReducer from './todosReducers';

 const rootReducer = combineReducers({
  todos: todosReducer
});

 export default rootReducer;