import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Material components
import { Paper } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { TaskItem } from './components';

function ListTask(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PerfectScrollbar className={classes.container}>
          {[...Array(10)].map(item => (
            <TaskItem key={Math.random()} />
          ))}
        </PerfectScrollbar>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ListTask);
