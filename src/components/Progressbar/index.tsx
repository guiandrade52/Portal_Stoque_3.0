import React from 'react';

// Material components
import { Grid, CircularProgress } from '@material-ui/core';

export default function Loading<T>({ ...res }: T) {
  return (
    <Grid container justify="center" alignContent="center">
      <Grid item>
        <CircularProgress {...res} />
      </Grid>
    </Grid>
  );
}
