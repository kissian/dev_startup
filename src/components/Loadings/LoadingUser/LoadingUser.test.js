import React from 'react';
import { shallow } from 'enzyme';
import LoadingUser from './index';

describe('LoadingUser component', () => {
    let component = null;
    it('renders component', () => {
        component = shallow(<LoadingUser />);
    });
    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
