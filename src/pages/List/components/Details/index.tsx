import React from 'react';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Tabs, TabsPanel } from './components';

function Details(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [value, setValue] = React.useState(0);

  function handleChange(event: React.ChangeEvent<{}>, newValue: number) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
      <Tabs value={value} handleChange={handleChange} />
      <TabsPanel value={value} />
    </div>
  );
}

export default withStyles(styles)(Details);
