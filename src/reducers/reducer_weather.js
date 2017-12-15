import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER:
            // this line creates a neww array and also adds the state object to the new array;
            // return state.concat([action.payload.data]);
            
            // this line do the same, but using ES6 sintax
            return [ action.payload.data, ...state];
    }

    return state;    
}