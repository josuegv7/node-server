import { FETCH_FOODLIST } from '../Actions/types';
import _ from "lodash";

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_FOODLIST:
            return [_.mapKeys(action.payload.data, '_id')];
        default:
            return state;
    }
}