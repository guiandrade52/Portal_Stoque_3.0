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
import { TaskItem, NoTask } from './components';
import { Progressbar } from '~/components';

function ListTask(props: WithStyles<typeof styles>) {
  const tasks = useSelector((state: ApplicationState) => state.tasks);
  const { classes } = props;

  function RenderList() {
    if (tasks.loading) {
      return (
        <div className={classes.loading}>
          <Progressbar size={80} />
        </div>
      );
    }

    if (tasks.data.tasks.length === 0) {
      return <NoTask />;
    }

    if (!tasks.loading) {
      return (
        <PerfectScrollbar className={classes.container}>
          {tasks.data.tasks.map(task => (
            <TaskItem task={task} key={task.ExecutionId} />
          ))}
        </PerfectScrollbar>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>{RenderList()}</Paper>
    </div>
  );
}

export default withStyles(styles)(ListTask);
