import React from 'react';
import { shallow } from 'enzyme';
import ListLoading from './index';

describe('ListLoading component', () => {
    let component = null;
    it('renders component', () => {
        component = shallow(<ListLoading />);
    });
    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
