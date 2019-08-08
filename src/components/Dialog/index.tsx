import React from 'react';

// Material components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

// Styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

interface OwnProps extends WithStyles<typeof styles> {
  open: boolean;
  setOpen: (open: boolean) => void;
  dialogActions?: React.ReactNode;
  dialogContent?: React.ReactNode;
  dialogTitle?: string;
  dialogContentText?: string;
  fullWidth?: boolean;
  fullScreen?: boolean;
  disableEscapeKeyDown?: boolean;
  disableBackdropClick?: boolean;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
  scroll?: 'body' | 'paper';
}

function Dialogs(props: OwnProps) {
  const {
    open,
    setOpen,
    dialogActions,
    fullWidth,
    fullScreen,
    dialogTitle,
    disableEscapeKeyDown,
    disableBackdropClick,
    maxWidth,
    scroll,
    dialogContentText,
    dialogContent,
  } = props;

  return (
    <Dialog
      fullWidth={fullWidth}
      maxWidth={maxWidth}
      open={open}
      onClose={() => setOpen(false)}
      aria-labelledby="max-width-dialog-title"
      fullScreen={fullScreen}
      disableEscapeKeyDown={disableEscapeKeyDown}
      disableBackdropClick={disableBackdropClick}
      scroll={scroll}
    >
      {dialogTitle && <DialogTitle id="max-width-dialog-title">{dialogTitle}</DialogTitle>}
      <DialogContent>
        {dialogContentText && <DialogContentText>{dialogContentText}</DialogContentText>}
        {dialogContent}
      </DialogContent>
      <DialogActions>{dialogActions}</DialogActions>
    </Dialog>
  );
}

export default withStyles(styles)(Dialogs);
