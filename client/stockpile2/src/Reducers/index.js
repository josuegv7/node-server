import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';


import auth from './auth';
import foods from './reducer_food';
import potReducer from './reducer_pot';
import recipeReducer from './reducer_recipe';

export default combineReducers({
    auth,
    foods,
    pot: potReducer,
    form: formReducer,
    recipes: recipeReducer
});
