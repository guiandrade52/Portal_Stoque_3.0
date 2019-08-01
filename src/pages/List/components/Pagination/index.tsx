import React, { useState } from 'react';

// Material components
import { Typography, IconButton, Grid } from '@material-ui/core';

// Material icons
import {
  NavigateBefore as NavigateBeforeIcon,
  NavigateNext as NavigateNextIcon,
} from '@material-ui/icons';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

function Pagination(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const totalPage = 30;
  const [page, setPage] = useState(1);

  function handleNextPage() {
    if (page < 30) {
      setPage(page + 1);
    }
  }

  function handleBeforePage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item>
          <IconButton size="small" onClick={handleBeforePage}>
            <NavigateBeforeIcon />
          </IconButton>

          <IconButton size="small" onClick={handleNextPage}>
            <NavigateNextIcon />
          </IconButton>
        </Grid>

        <Grid item>
          <Typography color="textSecondary" className={classes.pages}>
            {`${page} de ${totalPage}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Pagination);
