import React from 'react';

// Material components
import { Paper, Tabs, Tab } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

interface OwnProps extends WithStyles<typeof styles> {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

function TabsComponet(props: OwnProps) {
  const { classes, value, handleChange } = props;
  return (
    <Paper className={classes.paper}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        <Tab label="Resumo" />
        <Tab label="Endereço" />
        <Tab label="Classificação" />
        <Tab label="Contato" />
      </Tabs>
    </Paper>
  );
}

export default withStyles(styles)(TabsComponet);
