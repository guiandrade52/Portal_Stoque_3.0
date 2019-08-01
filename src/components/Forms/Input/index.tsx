import React from 'react';

// Material components
import { TextField } from '@material-ui/core';

function Input(props: any) {
  const {
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
  } = props;

  return (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
}

export default Input;
