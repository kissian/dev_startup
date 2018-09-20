import React from 'react';
import { shallow } from 'enzyme';
import LoadingTimeline from './index';

describe('LoadingTimeline component', () => {
    let component = null;
    it('renders component', () => {
        component = shallow(<LoadingTimeline />);
    });
    it('matches snapshot', () => {
        expect(component).toMatchSnapshot();
    });
});
