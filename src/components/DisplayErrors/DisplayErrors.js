import { React } from 'react';
import { Alert } from 'reactstrap';
import { isEmptyObjectHelper } from '../../helpers/isEmptyObjectHelper';
import './display-errors.css';

export const DisplayErrors = ({ errors }) => {
  /*  if (isEmptyObjectHelper(errors)) {
    return null;
  }  */

  return (
    <Alert className="alert-messages" color="danger">
      {getAllErrorsInStrings(errors)}
    </Alert>
  );
};

const getAllErrorsInStrings = (errorData) => {
  return Object.keys(errorData).map((item) => {
    return `${errorData[item]}\n`;
  });
};
