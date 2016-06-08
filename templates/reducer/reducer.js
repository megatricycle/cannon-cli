import { ACTION } from '../../actions/${name}Actions/${name}ActionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function ${name}Reducer(state = initialState.${name}, action) {
    let newState;

    switch (action.type) {
        case ACTION:
            return objectAssign({}, state, {
                /* insert new attributes here */
            });

        default:
            return state;
    }
}
