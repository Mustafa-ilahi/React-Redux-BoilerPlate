import { combineReducers } from 'redux';
import auth_reducer from './auth-reducer';
import app_reducer from './app-reducer';

export default combineReducers({
    auth : auth_reducer,
    app: app_reducer
})