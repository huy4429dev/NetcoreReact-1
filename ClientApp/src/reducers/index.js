import {combineReducers} from 'redux';
import userReducer from './user';
import projectReducer from './project';
import loginReducer from './login';
const rootReducer = combineReducers({
    userReducer,
    projectReducer,
    loginReducer
});
export default rootReducer;