import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    pages: {
      fontSize: 13,
      paddingTop: 5,
    },
  });
