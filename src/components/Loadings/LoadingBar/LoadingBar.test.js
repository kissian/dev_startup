import React from 'react';
import { shallow } from 'enzyme';
import LoadingBar from './index';

describe('LoadingBar component', () => {
    let component = null;
    it('renders component', () => {
        component = shallow(<LoadingBar />);
    });
    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
