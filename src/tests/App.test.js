import React from 'react';
import { mount } from 'enzyme';
import App from '../App';

describe('The input field', () => {
  let wrapper;
  const playerName = 'Hello';
  const playerScore = '2000';

  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it('It is initially empty', () => {
    // console.log(wrapper.debug());
    const input = wrapper.find('.player-inputfield .form-control');
    //console.log('input :--> ', input.debug(), 'LLL : ', input.at(0).props());
    expect(input.props().value).toBe('');
  });
  it(`It is initially value of player is ${playerName}`, () => {
    const input = wrapper.find('.player-inputfield .form-control');
    input.props().value = playerName;
    expect(input.props().value).toBe(playerName);
  });
  it(`It is initially value of score is ${playerScore}`, () => {
    const input = wrapper.find('.player-inputfield .form-control');
    input.props().value = playerScore;
    expect(input.props().value).toBe(playerScore);
  });

  describe('it could be populated with a value', () => {
    beforeEach(() => {
      let playerNameInput = wrapper.find('.player-inputfield .form-control');
      let playerScoreInput = wrapper.find('.score-inputfield .form-control');
      playerNameInput.simulate('change', {
        target: { name: 'player', value: playerName },
      });
      playerScoreInput.simulate('change', {
        target: { name: 'score', value: playerScore },
      });
    });

    it(`the input value changes to ${playerName}`, () => {
      const inputValue = wrapper.find('.player-inputfield .form-control');
      expect(inputValue.props().value).toBe(playerName);
    });

    describe('`then` the form can be submitted', () => {
      beforeEach(() => {
        const button = wrapper.find('.submit-button .btn');
        button.simulate('click');
      });

      describe('when the form is submitted', () => {
        it('the input field is cleared', () => {
          const input = wrapper.find('.player-inputfield .form-control');
          expect(input.props().value).toBe('');
        });

        it('the eachEntry is added to the leaderBoard Array', () => {
          const leaderBoardList = wrapper.find('tbody tr');
          expect(leaderBoardList).toHaveLength(1);
        });

        it(`the eachEntry value is  ${playerName}`, () => {
          const todoList = wrapper.find('tbody tr td');
          expect(todoList.at(0).text()).toBe(playerName);
        });

        it(`the eachEntry value is  ${playerScore}`, () => {
          const todoList = wrapper.find('tbody tr td');
          expect(todoList.at(1).text()).toBe(playerScore);
        });
      });
    });
  });
});
