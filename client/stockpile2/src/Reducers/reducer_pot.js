import { ADD_INGREDIENT } from '../Actions/types';

const INITIAL_STATE = []

const potReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
        return [...state, action.payload]
    default:
        return state;
  }
};

export default potReducer;

