import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { useSelector } from 'react-redux';

// Material components
import { Paper } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Redux
import { ApplicationState } from '~/store';

// Custom components
import { TaskItem } from './components';

function ListTask(props: WithStyles<typeof styles>) {
  const tasks = useSelector((state: ApplicationState) => state.tasks.data.tasks);
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <PerfectScrollbar className={classes.container}>
          {tasks.map(task => (
            <TaskItem task={task} key={task.ExecutionId} />
          ))}
        </PerfectScrollbar>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(ListTask);
