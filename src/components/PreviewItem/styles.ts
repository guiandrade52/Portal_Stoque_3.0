import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
    },
    item: {
      border: '1px solid  rgba(0,0,0, 0.1)',
      borderRadius: 5,
      marginRight: theme.spacing(1),
      '&:hover': {
        cursor: 'pointer',
        background: 'rgba(0,0,0,0.15)',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
    },
    img: {
      borderRadius: '5px 5px 0 0',
      width: 200,
      height: 200,
    },
    imgHeader: {
      fontSize: 12,
      margin: theme.spacing(0.6),
      color: '#AAA',
    },
    loading: {
      padding: 15,
    },
  });
