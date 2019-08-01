import React from 'react';

// Material components
import {} from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Task, Address, Classification, Requester } from './components';

interface OwnProps extends WithStyles<typeof styles> {
  value: number;
}

function TabsPanel(props: OwnProps) {
  const { classes, value } = props;
  return (
    <div className={classes.root}>
      {Boolean(value === 0) && <Task />}
      {Boolean(value === 1) && <Address />}
      {Boolean(value === 2) && <Classification />}
      {Boolean(value === 3) && <Requester />}
    </div>
  );
}

export default withStyles(styles)(TabsPanel);
