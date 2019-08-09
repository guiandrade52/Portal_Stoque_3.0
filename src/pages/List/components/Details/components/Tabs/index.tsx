import React from 'react';
import classnames from 'classnames';

// Material components
import { Paper, Tabs, Tab } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import { Task } from '~/store/modules/tasks/types';

interface OwnProps extends WithStyles<typeof styles> {
  value: number;
  task: Task;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
}

function TabsComponet(props: OwnProps) {
  const { classes, task, value, handleChange } = props;

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
        <Tab
          label="RAT/CIT"
          className={classnames({ [classes.hidden]: Boolean(task.Rats && task.Rats.length === 0) })}
        />
      </Tabs>
    </Paper>
  );
}

export default withStyles(styles)(TabsComponet);
