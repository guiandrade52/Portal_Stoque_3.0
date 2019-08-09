import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxHeight: '100%',
    },
    paper: {
      padding: 1.5,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    hidden: {
      display: 'none',
    },
  });
