import { FETCH_FOODLIST, DECREMENT } from '../Actions/types';

const INITIAL_STATE = {};

// Function to covnert an Array of objects to an Object of Objects
const arrayToObject = (array, keyField) =>
  array.reduce((obj, item) => {
    obj[item[keyField]] = item;
    return obj;
  }, {});


export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FOODLIST:
            return arrayToObject(action.payload.data.foodList,"name");
        case DECREMENT:
          return arrayToObject(action.payload.data.foodList,"name");
        default:
            return state;
    }
};
