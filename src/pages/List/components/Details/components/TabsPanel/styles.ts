import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: 30,
      height: 'calc(100vh - 203px)',
      borderRadius: 5,
    },
    container: {
      borderRadius: 5,
      paddingBottom: 3,
    },
  });
