import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      height: 'calc(100vh - 205px)',
    },
    container: {
      padding: theme.spacing(1),
    },
    loading: {
      paddingTop: '40%',
    },
  });
