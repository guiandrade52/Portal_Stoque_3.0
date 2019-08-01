import React from 'react';

// Material components
import { Fade, Paper } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Material components

function Classification(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <Fade in timeout={700}>
      <Paper className={classes.paper}>
        <h1>Classifications</h1>
      </Paper>
    </Fade>
  );
}

export default withStyles(styles)(Classification);
