import { expect } from 'chai';
import * as ActionCreators from './${name}Actions';
import * as ActionTypes from './${name}ActionTypes';

describe('Actions', () => {
    const appState = {
        flag: false
    };

    it('should do something', () => {
        const expected = {
            type: ActionTypes.ACTION
        };

        expect(ActionCreators.sampleAction(appState)).to.deep.equal(expected);
    });
});
