import React from 'react';

// Material components
import { Fade, Paper, Typography, Divider } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Form } from './components';

function Task(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <Fade in timeout={700}>
      <Paper className={classes.paper}>
        <Typography color="textSecondary" variant="h6">
          Dados da tarefa
        </Typography>
        <Divider />
        <Form />
      </Paper>
    </Fade>
  );
}

export default withStyles(styles)(Task);
