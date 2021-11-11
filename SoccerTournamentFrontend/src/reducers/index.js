import { combineReducers } from 'redux';

import authReducer from './authReducers';
import teamDetailsReducer from './teamDetailsReducer';

export default combineReducers({
    auth : authReducer,
    team : teamDetailsReducer
});