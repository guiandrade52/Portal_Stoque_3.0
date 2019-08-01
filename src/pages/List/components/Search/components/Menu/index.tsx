import React, { useState } from 'react';

// Material components
import { MenuItem, Menu, IconButton } from '@material-ui/core';

// Material icons
import { Menu as MenuIcon } from '@material-ui/icons';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

function MenuSearch(props: WithStyles<typeof styles>) {
  const { classes } = props;

  const [state, setState] = useState({
    anchorEl: null,
    open: false,
  });

  function handleClick(event: any) {
    setState({ anchorEl: event.currentTarget, open: true });
  }

  function handleClose() {
    setState({ anchorEl: null, open: false });
  }

  function handleActionOnClick() {
    console.log('entrei');
    setState({ anchorEl: null, open: false });
  }

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-owns={state.anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="simple-menu"
        anchorEl={state.anchorEl}
        open={Boolean(state.anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.itemMenu} onClick={handleActionOnClick}>
          Exportar relátorio
        </MenuItem>
      </Menu>
    </>
  );
}

export default withStyles(styles)(MenuSearch);
