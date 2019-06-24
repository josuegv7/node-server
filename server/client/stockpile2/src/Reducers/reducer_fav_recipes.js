import { FETCH_FAV_RECIPES } from "../Actions/types";

const INITIAL_STATE = {};

// Function to covnert an Array of objects to an Object of Objects
const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_FAV_RECIPES:
      return arrayToObject(action.payload.data.favoriteRecipesList,"name");
    default:
      return state;
  }
};
