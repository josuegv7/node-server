import { FETCH_FOODLIST } from '../Actions/types';
import _ from "lodash";

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
            // return _.mapKeys(action.payload.data, 'name');
            return arrayToObject(action.payload.data.foodList,"name");
        default:
            return state;
    }
}



