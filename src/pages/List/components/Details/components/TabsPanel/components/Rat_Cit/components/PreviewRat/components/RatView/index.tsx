import React, { useState } from 'react';

// Material components
import { Grid, Typography, Button } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';

// Styles
import { styles } from './styles';

// Custom components
import { Rat } from '~/store/modules/tasks/types';
import { Progressbar, Dialog } from '~/components';

// Icons
import pdfIcon from '~/assets/icons/icon-pdf.png';

// Services
import api, { HOST } from '~/services/api';

interface OwnProps extends WithStyles<typeof styles> {
  rat: Rat;
}

function RatView(props: OwnProps) {
  const { classes, rat } = props;
  const [state, setState] = useState({ loading: true, error: false });
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  React.useEffect(() => {
    async function getRat() {
      await api
        .get(`/api/Rat?executionId=${rat.ExecutionId}&visita=${rat.NumeroVisita}`)
        .then(resp => {
          if (resp.status === 200) setState({ loading: false, error: false });
          else if (resp.status === 206) setState({ loading: false, error: true });
        });
    }

    getRat();
  }, [rat.ExecutionId, rat.NumeroVisita]);

  function handleOpen() {
    const file = (
      <embed
        className={classes.fileView}
        src={`${HOST}/Temp/RAT_${rat.ExecutionId}_${rat.NumeroVisita}.pdf`}
      />
    );

    setContent(file);
    setOpen(true);
  }

  return (
    <Grid item className={classes.item}>
      <Dialog
        open={open}
        setOpen={setOpen}
        dialogActions={<Button onClick={() => setOpen(false)}>Fechar</Button>}
        maxWidth="lg"
        dialogContent={content}
        fullWidth
      />
      {state.loading && (
        <div className={classes.containerLoading}>
          <Progressbar />
        </div>
      )}
      {!state.loading && (
        <div onClick={handleOpen}>
          <img className={classes.iconPdf} src={pdfIcon} alt="icon" />
          <Typography className={classes.itemText}>{`${rat.NumeroVisita}° Visita`}</Typography>
        </div>
      )}
    </Grid>
  );
}

export default withStyles(styles)(RatView);
