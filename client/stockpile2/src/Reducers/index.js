import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


import auth from './auth';
import foods from './reducer_food';

export default combineReducers({
    auth,
    foods,
    form: formReducer
});
