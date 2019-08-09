import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    iconPdf: {
      width: 120,
      height: 150,
      margin: '30px 0 10px 40px',
    },
    item: {
      border: '1px solid  rgba(0,0,0, 0.1)',
      borderRadius: 5,
      width: 202,
      marginRight: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
        background: 'rgba(0,0,0,0.15)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
    },
    itemText: {
      fontSize: 12,
      margin: theme.spacing(0.6),
      color: '#AAA',
    },
    containerLoading: {
      padding: 15,
    },
    fileView: {
      width: '100%',
      height: '73vh',
    },
    error: {
      fontSize: 150,
      color: 'rgba(217, 30, 24, 0.80)',
      marginLeft: 25,
    },
  });
