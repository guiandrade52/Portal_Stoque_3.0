import React from 'react';
import { useDispatch } from 'react-redux';

// Material components
import { IconButton, MenuItem, Menu } from '@material-ui/core';

// Material icons
import AccountCircle from '@material-ui/icons/AccountCircle';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Redux
import { signOut } from '~/store/modules/auth/actions';

function Account({ classes }: WithStyles<typeof styles>) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  function handleMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  function handleSignOut() {
    setAnchorEl(null);
    dispatch(signOut());
  }

  return (
    <div className={classes.root}>
      <IconButton
        aria-label="Account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => console.log('Deve implementar')}>Minha Conta</MenuItem>
        <MenuItem onClick={() => console.log('Deve implementar')}>Alterar senha</MenuItem>
        <MenuItem onClick={handleSignOut}>Sair</MenuItem>
      </Menu>
    </div>
  );
}

export default withStyles(styles)(Account);
