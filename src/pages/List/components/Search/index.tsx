import React, { useState } from 'react';

// Material components
import { Paper, InputBase, Divider } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { MenuSearch } from './components';

function Search(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [value, setvalue] = useState('');

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <MenuSearch />
        <Divider className={classes.divider} />
        <InputBase
          id="standard-name"
          className={classes.input}
          value={value}
          onChange={e => setvalue(e.target.value)}
          placeholder="Pesquisar tarefa"
        />
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Search);
