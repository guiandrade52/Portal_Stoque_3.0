import React from 'react';
import { connect, useSelector } from 'react-redux';
import { MdAssignment } from 'react-icons/md';

// Redux form
import { Field, reduxForm } from 'redux-form';

// Material components
import { Fade, Paper, Divider, Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Custom components
import { PreviewItem } from '~/components';
import { Input } from '~/components/Forms';
import { styles } from './styles';

import { ApplicationState } from '~/store';

function Form(props: any) {
  const { classes } = props;
  const itemSelected = useSelector((state: ApplicationState) => state.tasks.selected);

  return (
    <Fade in timeout={700}>
      <Paper className={classes.paper}>
        <MdAssignment size={30} color="#888" />
        <Divider />
        <form className={classes.container}>
          <Grid container spacing={2}>
            <Grid item md={3}>
              <Field
                name="ExecutionId"
                component={Input}
                fullWidth
                label="N° Ocorrência"
                disabled
              />
            </Grid>

            <Grid item md={4}>
              <Field name="Origem" component={Input} fullWidth label="Origem" disabled />
            </Grid>

            <Grid item md={5}>
              <Field
                name="GrupoServico"
                component={Input}
                fullWidth
                label="Grupo de serviço"
                disabled
              />
            </Grid>

            <Grid item md={4}>
              <Field name="DataCr" component={Input} fullWidth label="Data de criação" disabled />
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

            <PreviewItem anexos={itemSelected.Anexos} />
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
      form: 'tabResumo',
      enableReinitialize: true,
    })(Form)
  )
);
