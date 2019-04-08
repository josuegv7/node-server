import { FETCH_FAV_RECIPES } from "../Actions/types";

const INITIAL_STATE = {};

const favRecipeReducer = (state = INITIAL_STATE, action) => {
  // console.log("FRONT STATE", state)
  switch (action.type) {
    case FETCH_FAV_RECIPES:
      console.log("FRONT ACTION FAV", action.payload);
      // return [...state, action.payload.matches];
      return [...state, action.payload];

    default:
      return state;
  }
};

export default favRecipeReducer;
