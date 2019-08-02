import React from 'react';
import { MdSentimentVerySatisfied } from 'react-icons/md';

// Material components
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { styles } from './styles';

function NoTask({ classes }: WithStyles<typeof styles>) {
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <MdSentimentVerySatisfied color="#AAA" size={90} />
        <Typography color="textPrimary" variant="caption">
          Você não possui nenhuma ocorrência.
        </Typography>
      </div>
    </div>
  );
}

export default withStyles(styles)(NoTask);
