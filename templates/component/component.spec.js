import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import ${name} from './${name}';

describe('<${name} />', () => {
    it('should do something', () => {
        const wrapper = shallow(<${name} />);
        const actual = true;
        const expected = false;

        expect(actual).to.equal(expected);
    });
});
