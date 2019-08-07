import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Resume, Address, Classification, Requester } from './components';

interface OwnProps extends WithStyles<typeof styles> {
  value: number;
}

function TabsPanel(props: OwnProps) {
  const { classes, value } = props;
  return (
    <div className={classes.root}>
      <PerfectScrollbar className={classes.container}>
        {Boolean(value === 0) && <Resume />}
        {Boolean(value === 1) && <Address />}
        {Boolean(value === 2) && <Classification />}
        {Boolean(value === 3) && <Requester />}
      </PerfectScrollbar>
    </div>
  );
}

export default withStyles(styles)(TabsPanel);
