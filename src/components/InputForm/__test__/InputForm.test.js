import React from 'react';
import { shallow } from 'enzyme';
import { Button } from 'reactstrap';
import { InputForm } from '../InputForm';

describe('<InputForm />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<InputForm />);
  });

  it('It has an input field', () => {
    //console.log(wrapper.debug());
    const input = wrapper.find('.player-inputfield');
    expect(input.props().value).toBe('');
  });

  it('contains a button', () => {
    const button = <Button>Submit</Button>;
    expect(wrapper.containsMatchingElement(button)).toBe(true);
  });

  it('There is a text on the button', () => {
    const button = wrapper.find('.submit-button');
    expect(button.text()).toEqual('<Button />');
  });

  /* it('button click should call handleFinalSubmit', () => {
    const handleFinalSubmitMock = jest.fn();
    const button = wrapper.find('.submit-button-click');
    console.log(
      'RT :',
      button.debug(),
      '----->',
      handleFinalSubmitMock.mock.calls.length,
    );
    button.simulate('click');
    expect(handleFinalSubmitMock).toHaveBeenCalled();
    //expect(handleFinalSubmitMock.mock.calls.length).toEqual(1);
  }); */
});
