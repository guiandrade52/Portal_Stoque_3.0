import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Icons
import { Clear, Search as SearchIcon } from '@material-ui/icons';

// Material components
import { Paper, InputBase, Divider, IconButton } from '@material-ui/core';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
// import { MenuSearch } from './components';

// State
import { ApplicationState } from '~/store';
import { updateFilter } from '~/store/modules/filter/actions';

function Search(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const [stateComponent, setStateComponent] = useState({ text: '', enable: false });
  const filter = useSelector((state: ApplicationState) => state.filter.data);
  const dispatch = useDispatch();

  function handleChangeFilter(text: string) {
    if (text.length > 0) setStateComponent({ text, enable: true });
    else setStateComponent({ text, enable: false });
    filter.search = text;
    dispatch(updateFilter(filter));
  }

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        {/* <MenuSearch /> */}
        <SearchIcon className={classes.searchIcon} />
        <Divider className={classes.divider} />
        <InputBase
          id="standard-name"
          className={classes.input}
          value={stateComponent.text}
          onChange={e => handleChangeFilter(e.target.value)}
          placeholder="Pesquisar ocorrências"
          fullWidth
        />
        {stateComponent.enable && (
          <IconButton onClick={() => handleChangeFilter('')}>
            <Clear />
          </IconButton>
        )}
      </Paper>
    </div>
  );
}

export default withStyles(styles)(Search);
