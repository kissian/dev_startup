import React from 'react';
import { shallow } from 'enzyme';
import SideCardLoading from './index';

describe('SideCardLoading component', () => {
    let component = null;
    it('renders component', () => {
        component = shallow(<SideCardLoading />);
    });
    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
