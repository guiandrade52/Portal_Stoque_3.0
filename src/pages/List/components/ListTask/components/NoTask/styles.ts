import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: 10,
    },
    container: {
      display: 'flex',
      border: '1px solid rgba(0,0,0,0.20)',
      borderRadius: 5,
      alignItems: 'center',
      padding: 5,
    },
  });
