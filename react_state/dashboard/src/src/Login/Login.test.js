import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
  });

  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('submit button is enabled after changing both inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input[type="email"]').simulate('change', {
      target: { value: 'test@example.com' },
    });
    wrapper.find('input[type="password"]').simulate('change', {
      target: { value: 'password' },
    });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });
});