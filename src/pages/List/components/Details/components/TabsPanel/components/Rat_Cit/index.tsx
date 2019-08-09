import React from 'react';
import { WithStyles } from '@material-ui/styles';
import { useSelector } from 'react-redux';

// Icons
import { MdStoreMallDirectory, MdLibraryBooks } from 'react-icons/md';

// Material components
import { Fade, Paper, Divider, Grid, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Redux state
import { ApplicationState } from '~/store';

// Styles
import { styles } from './styles';

// Custom components
import { PreviewRat, PreviewCit } from './components';

function RatCit(props: WithStyles<typeof styles>) {
  const { classes } = props;
  const task = useSelector((state: ApplicationState) => state.tasks.selected);
  return (
    <>
      {task.Rats && task.Rats.length > 0 && (
        <Fade in timeout={700}>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item md={1}>
                <MdStoreMallDirectory className={classes.icon} />
              </Grid>
              <Grid item md={11}>
                <Typography variant="subtitle1" className={classes.notRatOrCit}>
                  Relatório de visita técnica
                </Typography>
                <Divider />
              </Grid>
              <Grid item md={12}>
                {task.Rats && <PreviewRat rats={task.Rats} />}
              </Grid>
            </Grid>
          </Paper>
        </Fade>
      )}
      {task.Cit && (
        <div className={classes.container}>
          <Fade in timeout={700}>
            <Paper className={classes.paper}>
              <Grid container>
                <Grid item md={1}>
                  <MdLibraryBooks className={classes.icon} />
                </Grid>
                <Grid item md={11}>
                  <Typography variant="subtitle1" style={{ color: '#888' }}>
                    Comprovante de instalação e treinamento
                  </Typography>
                  <Divider />
                </Grid>
                <Grid item md={12}>
                  {task.Cit && <PreviewCit cit={task.Cit} />}
                </Grid>
              </Grid>
            </Paper>
          </Fade>
        </div>
      )}
    </>
  );
}

export default withStyles(styles)(RatCit);
