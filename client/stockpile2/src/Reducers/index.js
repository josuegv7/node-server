import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


import auth from './auth';
import food from './reducer_food';

export default combineReducers({
    auth,
    food,
    form: formReducer
});
