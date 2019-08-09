import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
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
    img: {
      borderRadius: '5px 5px 0 0',
      width: 200,
      height: 200,
    },
    pdf: {
      borderRadius: '5px 5px 0 0',
      width: 150,
      height: 170,
      margin: '7px 0 10px 27px',
    },
    imgHeader: {
      fontSize: 12,
      margin: theme.spacing(0.6),
      color: '#AAA',
    },
    loading: {
      padding: 15,
    },
    imgDetails: {
      borderRadius: '5px 5px 0 0',
      width: '100%',
      height: '100%',
    },
    imgDetailsPDF: {
      borderRadius: '5px 5px 0 0',
      width: '900',
      height: '500',
    },
    files: {
      borderRadius: '5px 5px 0 0',
      alignItems: 'center',
      height: 200,
      background: '#EEE',
      display: 'flex',
    },
    iconFile: {
      fontSize: 100,
      color: '#999',
      marginLeft: 45,
    },
    iframe: {
      width: '100%',
      height: '73vh',
    },
    textNotFile: {
      color: '#999',
      margin: 10,
    },
    iconDownload: {
      fontSize: 100,
      color: '#a5a5a5',
      marginLeft: 45,
      '&:hover': {
        color: '#929292',
        cursor: 'pointer',
        transform: 'scale(1.1) translate(0px, -5px)',
      },
    },
  });
