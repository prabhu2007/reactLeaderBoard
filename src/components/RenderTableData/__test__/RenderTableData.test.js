import React from 'react';
import { shallow } from 'enzyme';
import { RenderTableData } from '../RenderTableData';

describe('RenderTableData component', () => {
  it('should render correctly with no props', () => {
    const renderTableDataComponent = shallow(<RenderTableData />);

    expect(renderTableDataComponent).toMatchSnapshot();
  });

  it('should render correctly with given array', () => {
    const leaderBoard = [
      { name: 'John', score: '200' },
      { name: 'Tim', score: '100' },
    ];
    const render_table_component = shallow(
      <RenderTableData leaderBoard={leaderBoard} />,
    );

    expect(render_table_component).toMatchSnapshot();
  });
});
