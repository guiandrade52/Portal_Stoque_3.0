import React, { useState } from 'react';
import { toastr } from 'react-redux-toastr';
import { MdSentimentVeryDissatisfied } from 'react-icons/md';

// Material components
import { Grid, Button } from '@material-ui/core';
import { withStyles, WithStyles } from '@material-ui/core/styles';

// Styles
import { styles } from './styles';

// Custom components
import { Cit } from '~/store/modules/tasks/types';
import { Progressbar, Dialog } from '~/components';

// Icons
import pdfIcon from '~/assets/icons/icon-pdf.png';

// Services
import api, { HOST } from '~/services/api';

interface OwnProps extends WithStyles<typeof styles> {
  cit: Cit;
}

function CitView(props: OwnProps) {
  const { classes, cit } = props;
  const [state, setState] = useState({ loading: true, error: false });
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();

  React.useEffect(() => {
    async function getRat() {
      const response = await api.get(`/api/Cit?executionId=${cit.ExecutionId}`);
      const { status } = response;
      if (status === 200) setState({ loading: false, error: false });
      else if (status === 206) setState({ loading: false, error: true });
      else {
        setState({ error: true, loading: false });
        toastr.error('Ops...', 'Encontramos um problema ao gerar a CIT.');
      }
    }
    getRat();
  }, [cit.ExecutionId]);

  function handleOpen() {
    const file = (
      <embed className={classes.fileView} src={`${HOST}/Temp/CIT_${cit.ExecutionId}.pdf`} />
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
      {state.error && <MdSentimentVeryDissatisfied className={classes.error} />}
      {!state.loading && !state.error && (
        <div onClick={handleOpen}>
          <img className={classes.iconPdf} src={pdfIcon} alt="icon" />
        </div>
      )}
    </Grid>
  );
}

export default withStyles(styles)(CitView);
