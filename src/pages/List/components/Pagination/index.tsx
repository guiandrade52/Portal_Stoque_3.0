import React, { useState } from 'react';
import { useSelector } from 'react-redux';

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

// Redux
import { ApplicationState } from '~/store';

function Pagination(props: WithStyles<typeof styles>) {
  const totalPages = useSelector((state: ApplicationState) => state.tasks.data.totalPages);
  const { classes } = props;
  const [page, setPage] = useState(1);

  function handleNextPage() {
    if (page === totalPages) {
      setPage(1);
    } else {
      setPage(page + 1);
    }
  }

  function handleBeforePage() {
    if (page === 1) {
      setPage(totalPages);
    } else {
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
            {`${page} de ${totalPages}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Pagination);
