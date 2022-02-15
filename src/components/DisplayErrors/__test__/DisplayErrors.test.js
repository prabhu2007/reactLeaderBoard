import React from 'react';
import { shallow } from 'enzyme';
import { Alert } from 'reactstrap';
import { DisplayErrors } from '../DisplayErrors';

describe('<DisplayErros />', () => {
  const nameError = 'Please Enter Name';
  const mock_errors = { name: nameError };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<DisplayErrors errors={mock_errors} />);
  });

  it('It has error message', () => {
    const input = wrapper.find('.alert-messages');
    expect(input.props().children[0]).toBe(`${nameError}\n`);
  });
});
