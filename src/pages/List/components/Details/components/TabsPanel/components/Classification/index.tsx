import React from 'react';
import { connect } from 'react-redux';
import { MdAssistantPhoto } from 'react-icons/md';
// Redux form
import { Field, reduxForm } from 'redux-form';

// Material components
import { Fade, Paper, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Custom components
import { Input } from '~/components/Forms';
import { styles } from './styles';

import { ApplicationState } from '~/store';

function Form(props: any) {
  const { classes } = props;
  return (
    <Fade in timeout={700}>
      <Paper className={classes.paper}>
        <MdAssistantPhoto size={30} color="#888" />
        <Divider />
        <form className={classes.container}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Field
                name="Classificacao"
                component={Input}
                fullWidth
                label="Classificaçao"
                disabled
              />
            </Grid>

            <Grid item md={4}>
              <Field name="Responsavel" component={Input} fullWidth label="Responsavel" disabled />
            </Grid>

            <Grid item md={5}>
              <Field name="Situacao" component={Input} fullWidth label="Situação" disabled />
            </Grid>

            <Grid item md={4}>
              <Field
                name="TipoOcorrencia"
                component={Input}
                fullWidth
                label="Tipo de ocorrência"
                disabled
              />
            </Grid>

            <Grid item md={4}>
              <Field name="DataTr" component={Input} fullWidth label="Tempo de resposta" disabled />
            </Grid>

            <Grid item md={4}>
              <Field name="DataTs" component={Input} fullWidth label="Tempo de solução" disabled />
            </Grid>

            <Grid item md={6}>
              <Field name="ClienteAt" component={Input} fullWidth label="Cliente" disabled />
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
      form: 'tabClassification',
      enableReinitialize: true,
    })(Form)
  )
);
