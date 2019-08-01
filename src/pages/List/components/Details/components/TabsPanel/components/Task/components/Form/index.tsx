import React from 'react';

// Redux form
import { Field, reduxForm } from 'redux-form';

// Material components
import { Grid } from '@material-ui/core';

// Custom components
import { Input } from '~/components/Forms';

interface User {
  firstName: string;
  lastName: string;
}

function Form() {
  return (
    <form>
      <Grid container spacing={2}>
        <Grid item>
          <Field name="firstName" component={Input} label="firstName" />
        </Grid>
        <Grid item>
          <Field name="lastName" component={Input} label="lastName" />
        </Grid>
      </Grid>
    </form>
  );
}

export default reduxForm<User>({
  form: 'detailsTask',
})(Form);
