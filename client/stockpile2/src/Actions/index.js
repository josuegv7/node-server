import { AUTH_USER, AUTH_ERROR, FETCH_FOODLIST, ADD_NEW_FOOD, ERROR_FOOD_LIST } from "./types";
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

// Action to get the food list:
export const fetchFoodList = () => dispatch => {
    axios
        .get("http://localhost:3090/stockpile/food", {
            headers: {
                auth: localStorage.getItem("token")
            }
        })
        .then(response =>
            dispatch({
                type: FETCH_FOODLIST,
                payload: response
            })
        );
};

// Add a food to the DB:
export const addFood = (foodFormProps, callback) => async dispatch =>{
    try{
        const response = await axios.post("http://localhost:3090/stockpile/food", foodFormProps);
        dispatch({type: ADD_NEW_FOOD, payload:response});
        callback();
    } catch(e){
        dispatch({ type: ERROR_FOOD_LIST, payload: "Error loadinng your food list" });
    }
};




