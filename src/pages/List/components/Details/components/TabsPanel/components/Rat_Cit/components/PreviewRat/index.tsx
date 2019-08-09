import React from 'react';

// Material components
import { Grid, Typography } from '@material-ui/core';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { Rat } from '~/store/modules/tasks/types';
import { RatView } from './components';

interface OwnProps extends WithStyles<typeof styles> {
  rats: Rat[];
}

function PreviewItem(props: OwnProps) {
  const { rats, classes } = props;

  return (
    <>
      <Grid container className={classes.root}>
        {rats.map(rat => {
          return <RatView key={Math.random()} rat={rat} />;
        })}
      </Grid>
    </>
  );
}

export default withStyles(styles)(PreviewItem);
