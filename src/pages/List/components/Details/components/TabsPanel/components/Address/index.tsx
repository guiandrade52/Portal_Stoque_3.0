import React from 'react';
import { connect } from 'react-redux';
import { MdLocationOn } from 'react-icons/md';

// Redux form
import { Field, reduxForm } from 'redux-form';

// Material components
import { Fade, Paper, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Custom components
import { Input } from '~/components/Forms';
import { styles } from './styles';

import { ApplicationState } from '~/store';

function Address(props: any) {
  const { classes } = props;
  return (
    <Fade in timeout={700}>
      <Paper className={classes.paper}>
        <MdLocationOn size={30} color="#888" />
        <Divider />
        <form className={classes.container}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <Field name="Logradouro" component={Input} fullWidth label="Logradouro" disabled />
            </Grid>

            <Grid item md={1}>
              <Field name="Numero" component={Input} fullWidth label="N°" disabled />
            </Grid>

            <Grid item md={5}>
              <Field name="Complemento" component={Input} fullWidth label="Complemento" disabled />
            </Grid>

            <Grid item md={5}>
              <Field name="Cidade" component={Input} fullWidth label="Cidade" disabled />
            </Grid>

            <Grid item md={3}>
              <Field name="Estado" component={Input} fullWidth label="Estado" disabled />
            </Grid>

            <Grid item md={4}>
              <Field name="Cep" component={Input} fullWidth label="Cep" disabled />
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Fade>
  );
}

const mapStateToProps = (state: ApplicationState) => ({
  initialValues: state.tasks.selected,
});

export default withStyles(styles)(
  connect(mapStateToProps)(
    reduxForm({
      form: 'tabAddress',
      enableReinitialize: true,
    })(Address)
  )
);
