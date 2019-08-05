import { createStyles, Theme } from '@material-ui/core/styles';

export const styles = (theme: Theme) =>
  createStyles({
    root: {
      marginTop: 8,
    },
    selected: {
      background: '#CCC',
    },
    card: {
      padding: theme.spacing(1),
      color: theme.palette.text.secondary,
      minHeight: 100,
    },
    empresa: {
      fontSize: 11,
    },
    produto: {
      fontSize: 10,
    },
    serie: {
      fontSize: 10,
    },
    servico: {
      fontSize: 10,
    },
    data: {
      fontSize: 10,
    },
    rootIcons: {
      fontSize: 14,
      float: 'right',
    },
    status: {
      padding: 7,
      borderRadius: 100,
      float: 'right',
    },
    rat: {},
    cit: { color: '#C148' },
    anexo: {},
  });
