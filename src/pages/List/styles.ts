import { Theme, createStyles } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    gridList: {},
    gridDetails: {
      paddingLeft: 8,
    },
    rootLoading: {
      marginTop: 50,
    },
    paper: {
      padding: theme.spacing(2),
    },
    pages: {
      fontSize: 13,
    },
  });
