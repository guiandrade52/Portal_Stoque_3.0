import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Material components
import { Grid, Hidden, Grow, Paper, Typography } from '@material-ui/core';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Mood as MoodIcon } from '@material-ui/icons';
import { styles } from './styles';

// Redux
import { loadTasksRequest } from '~/store/modules/tasks/actions';
import { ApplicationState } from '~/store';

// Custom components
import { SubHeader, Progressbar } from '~/components';
import { Search, Details, ListTask, Pagination } from './components';

function List(props: WithStyles<typeof styles>) {
  const dispatch = useDispatch();
  const tasks = useSelector((state: ApplicationState) => state.tasks);
  const filter = useSelector((state: ApplicationState) => state.filter.data);
  const { classes } = props;

  useEffect(() => {
    dispatch(loadTasksRequest(filter));
  }, [dispatch, filter]);

  function RenderTask() {
    if (tasks.error) {
      return (
        <>
          <div>Encontramos um erro ao tentar recuperar suas ocorrências</div>
        </>
      );
    }

    if (tasks.loading) {
      return (
        <>
          <Progressbar size={80} />
        </>
      );
    }

    if (tasks.data.length === 0) return <div>Não existe tarefas</div>;

    return (
      <Grow in timeout={500}>
        <Grid container className={classes.root}>
          <Grid xs={12} sm={12} md={3} item className={classes.gridList}>
            <Search />
            <Pagination />
            <ListTask />
          </Grid>

          <Hidden smDown>
            <Grid xs={12} sm={12} md={9} item className={classes.gridDetails}>
              <Details />
            </Grid>
          </Hidden>
        </Grid>
      </Grow>
    );
  }

  return (
    <div>
      <SubHeader title="Listar tarefas" Links={[]} />
      {RenderTask()}
    </div>
  );
}

export default withStyles(styles)(List);
