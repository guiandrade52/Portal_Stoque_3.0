import React from 'react';
import { connect } from 'react-redux';
import { MdPersonPin } from 'react-icons/md';
// Redux form
import { Field, reduxForm } from 'redux-form';

// Material components
import { Fade, Paper, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Custom components
import { Input } from '~/components/Forms';
import { styles } from './styles';

import { ApplicationState } from '~/store';

function Requester(props: any) {
  const { classes } = props;
  return (
    <Fade in timeout={700}>
      <Paper className={classes.paper}>
        <MdPersonPin size={30} color="#888" />
        <Divider />
        <form className={classes.container}>
          <Grid container spacing={2}>
            <Grid item md={7}>
              <Field name="Contato" component={Input} fullWidth label="Nome" disabled />
            </Grid>

            <Grid item md={5}>
              <Field name="Telefone" component={Input} fullWidth label="Telefone" disabled />
            </Grid>

            <Grid item md={7}>
              <Field name="Email" component={Input} fullWidth label="E-mail" disabled />
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
      form: 'tabContato',
      enableReinitialize: true,
    })(Requester)
  )
);
