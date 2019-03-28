import { AUTH_USER, AUTH_ERROR, FETCH_FOODLIST, ADD_NEW_FOOD, ERROR_FOOD_LIST, ERROR_ADDING_FOOD, DELETE_FOOD, ERROR_DELETE_FOOD, ADD_INGREDIENT } from "./types";
import axios from "axios";

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

// ========================================================== //

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
