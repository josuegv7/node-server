import { AUTH_USER, AUTH_ERROR, FETCH_FOODLIST, ADD_NEW_FOOD, ERROR_FOOD_LIST, ERROR_ADDING_FOOD, DELETE_FOOD, ERROR_DELETE_FOOD, ADD_INGREDIENT, RECIPE_LOOKUP, RECIPE_LOOKUP_ERROR,ADD_RECIPE_FAVORITE } from "./types";
import axios from "axios";


// =================  AUTH FUNCTIONS ====================
export const signup = (fromProps, callback) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:3090/user", fromProps);
        dispatch({ type: AUTH_USER, payload: response });
        localStorage.setItem("token", response.headers["x-auth"]);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: e });
        console.log(e);
    }
};

export const signin = (fromProps, callback) => async dispatch => {
    try {
        const response = await axios.post(
            "http://localhost:3090/user/login",
            fromProps
        );
        dispatch({ type: AUTH_USER, payload: response });
        localStorage.setItem("token", response.headers["x-auth"]);
        callback();
    } catch (e) {
        dispatch({ type: AUTH_ERROR, payload: e });
        console.log(e);
    }
};

export const signout = () => {
    localStorage.removeItem('token');
    return {
        type: AUTH_USER,
        payload: ''
    };
};

// =================== FOOD FUNCTIONS ================================= //

// Add a food to the DB:
export const addFood = (foodFormProps, callback) => async dispatch => {
    try {
        const response = await axios.post("http://localhost:3090/stockpile/food", foodFormProps);
        dispatch({ type: ADD_NEW_FOOD, payload: response });
        callback();
    } catch (e) {
        dispatch({type: ERROR_ADDING_FOOD, payload: "Error adding food to your Stock" });
    }
};

// Action to get the food list:
export const fetchFoodList = () => async dispatch => {
    try{
        const response = await axios.get(`http://localhost:3090/stockpile/foodlist`);
        dispatch({ type: FETCH_FOODLIST, payload: response });
    } catch(e){
        dispatch({ type: ERROR_FOOD_LIST, payload: "Error loadinng your stock" });
    }
};

// Action to delete food from food list:

export const deleteFood = id => async dispatch => {
         try {
             const response = await axios.delete(
             `http://localhost:3090/stockpile/foodlist/${id}`
           );
           dispatch({ type: DELETE_FOOD, payload: response });
         } catch (e) {
           dispatch({
             type: ERROR_DELETE_FOOD,
             payload: "Error deleting"
           });
         }
       };

// Add Ingredient to Pot:
export const addToPot = ingredient => {
    return {
        type: ADD_INGREDIENT,
        payload: ingredient
    };
};



//  ================== RECIPE LOOKUP ==================================


export const lookuprecipesSpoon = (ingredientList) => async dispatch =>{
    try{
        const response = await axios.post(
            'http://localhost:3090/spoon/recipeLookup',
            ingredientList
        );
        dispatch({ type: RECIPE_LOOKUP, payload:response.data});
    } catch(e){
        dispatch({ type: RECIPE_LOOKUP_ERROR, payload: e });
        console.log(e)
    }
}

// ================== ADD RECIPE TO FAVORITES =============================

export const recipeToFavorite = (recipeData) => async dispatch =>{
  console.log("RecipeData", recipeData)
    try{
        const response = await axios.post(
          'http://localhost:3090/stockpile/addrecipe',
          recipeData);
        dispatch({ type: ADD_RECIPE_FAVORITE, payload:response.data});
        console.log("Sending to BAck")
    } catch(e){
        dispatch({ type: RECIPE_LOOKUP_ERROR, payload: e });
        console.log("ERROR ADDING TO FAVORITE", e)
    }
}
