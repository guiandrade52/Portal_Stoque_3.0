import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

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
import { updateFilter } from '~/store/modules/filter/actions';

function Pagination(props: WithStyles<typeof styles>) {
  const totalPages = useSelector((state: ApplicationState) => state.tasks.data.totalPages);
  const filter = useSelector((state: ApplicationState) => state.filter.data);
  const { classes } = props;
  const dispatch = useDispatch();

  function handleNextPage() {
    if (filter.activePage === totalPages) {
      filter.activePage = 1;
    } else {
      filter.activePage += 1;
    }

    dispatch(updateFilter(filter));
  }

  function handleBeforePage() {
    if (filter.activePage === 1) {
      filter.activePage = totalPages;
    } else {
      filter.activePage -= 1;
    }

    dispatch(updateFilter(filter));
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
            {`${filter.activePage} de ${totalPages}`}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(Pagination);
