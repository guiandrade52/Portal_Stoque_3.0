import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
    },
    container: {
      paddingTop: 10,
    },
  });
