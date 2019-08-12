import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      color: theme.palette.text.secondary,
      padding: '2px 4px',
      display: 'flex',
      width: 'auto',
      alignItems: 'center',
    },
    input: {},
    divider: {
      width: 1,
      height: 28,
      margin: 4,
    },
    searchIcon: {
      fontSize: 30,
      margin: '8px 2px',
    },
  });
