import React from 'react';
import { useSelector } from 'react-redux';
// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Tabs, TabsPanel } from './components';

import { ApplicationState } from '~/store';

function Details(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);
  const task = useSelector((state: ApplicationState) => state.tasks.selected);

  function handleChange(event: React.ChangeEvent<{}>, tab: number) {
    setValue(tab);
  }

  React.useEffect(() => {
    setValue(0);
  }, [task.ExecutionId]);

  return (
    <div className={classes.root}>
      <Tabs value={value} task={task} handleChange={handleChange} />
      <TabsPanel value={value} />
    </div>
  );
}

export default withStyles(styles)(Details);
