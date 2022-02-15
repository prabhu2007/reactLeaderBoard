import { string } from 'prop-types';
import { React, useState } from 'react';
import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Button,
  Alert,
  FormFeedback,
} from 'reactstrap';
import { isEmptyObjectHelper } from '../../helpers/isEmptyObjectHelper';
import { DisplayErrors } from '../DisplayErrors';

export const InputForm = ({ headerTitle, updateLeaderBoardArray }) => {
  const initialInputState = { player: '', score: '' };

  const [eachEntry, setEachEntry] = useState(initialInputState);
  const [errors, updateErrors] = useState({});

  const { player, score } = eachEntry;

  const handleInputChange = (event) => {
    setEachEntry({ ...eachEntry, [event.target.name]: event.target.value });
  };

  const handleFinalSubmit = () => {
    const allErrors = validateInputFields(eachEntry);

    if (isEmptyObjectHelper(allErrors)) {
      updateLeaderBoardArray(eachEntry);
      setEachEntry(initialInputState);
      console.log('errors Before: ', errors);
      updateErrors({});
      return;
    }

    updateErrors(allErrors);
  };

  const validateInputFields = (playerDetails) => {
    let errors = {};

    const { player, score } = playerDetails;

    if (!player) {
      errors.player = 'Please Enter Player Name';
    } else if (player.length > 20) {
      errors.player = 'Player name should not exceed 20 chars';
    }

    if (!score) {
      errors.score = 'Please Enter Score';
    } else if (isNaN(score)) {
      errors.score = 'Score value should be in number';
    }

    return errors;
  };

  return (
    <div>
      <Row>
        <Col sm="12" className="text-center">
          <h2>{headerTitle}</h2>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Form className="form">
            <FormGroup>
              <Label for="player">Player</Label>
              <Input
                name="player"
                className="player-inputfield"
                placeholder="Ex. John"
                value={player}
                onChange={handleInputChange}
                invalid={!!errors.player}
              ></Input>
              <FormFeedback>{errors.player}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="score">Score</Label>
              <Input
                className="score-inputfield"
                name="score"
                placeholder="Ex. 1234"
                value={score}
                onChange={handleInputChange}
                invalid={!!errors.score}
              ></Input>
              <FormFeedback>{errors.score}</FormFeedback>
            </FormGroup>
            {!isEmptyObjectHelper(errors) && <DisplayErrors errors={errors} />}
            <Button className="submit-button" onClick={handleFinalSubmit}>
              Submit
            </Button>
            <button className="submit-button-click" onClick={handleFinalSubmit}>
              Submit Click
            </button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
