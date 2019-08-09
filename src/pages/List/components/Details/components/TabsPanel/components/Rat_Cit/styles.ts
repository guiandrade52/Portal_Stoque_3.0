import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    paper: {
      padding: theme.spacing(1),
    },
    container: {
      marginTop: theme.spacing(1),
    },
    icon: {
      fontSize: 30,
      color: '#999',
      marginLeft: 15,
    },
    notRatOrCit: {
      fontSize: 16,
      color: '#999',
    },
  });
