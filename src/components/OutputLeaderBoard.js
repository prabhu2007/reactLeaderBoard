import { React } from 'react';
import { Col, Row, Table } from 'reactstrap';
import { RenderTableData } from './RenderTableData';

export const OutputLeaderBoard = ({ leaderBoard }) => {
  return (
    <div className="mt-4">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Table>
            <thead>
              <tr>
                <th>no</th>
                <th>Name</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              <RenderTableData leaderBoard={leaderBoard} />
            </tbody>
          </Table>
        </Col>
      </Row>
    </div>
  );
};
