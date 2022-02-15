import { React } from 'react';

export const RenderTableData = (props) => {
  const { leaderBoard } = props;

  if (!leaderBoard) {
    return <div>No Data</div>;
  }

  return leaderBoard.map((item, index) => {
    const { player, score } = item;

    return (
      <tr className="player-list-item" key={index}>
        <th>{index + 1}</th>
        <td>{player}</td>
        <td>{score}</td>
      </tr>
    );
  });
};
