import { expect } from 'chai';
import * as ActionTypes from '../../actions/${name}Actions/${name}ActionTypes';
import reducer from './${name}Reducer';

describe('Reducers::${name}', () => {
    const getInitialState = () => {
        return {
        };
    };

    const getAppState = () => {
        return {
        };
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();

        expect(reducer(getInitialState(), action)).to.deep.equal(expected);
    });

    it('should handle ACTION', () => {
        const action = { type: ActionTypes.ACTION };
        const expected = Object.assign(getAppState(), {});

        expect(reducer(getAppState(), action)).to.deep.equal(expected);
    });
});
