import { RECIPE_LOOKUP } from '../Actions/types';

const INITIAL_STATE = []


const recipeReducer = (state = INITIAL_STATE , action) => {
     // console.log("FRONT STATE", state)
    switch (action.type){
        case RECIPE_LOOKUP:
          console.log("FRONT ACTION", action.payload.matches)
            // return [...state, action.payload.matches];
            return [...action.payload.matches, ...state];

    default:
        return state;
    }
}

export default recipeReducer;
