import React, { useState } from 'react';

import { Grid, Typography } from '@material-ui/core';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import api, { HOST } from '~/services/api';
import { Progressbar } from '~/components';

interface Anexo {
  Chave: string;
  DataCadastro: string;
  Descricao: string;
  Nome: string;
  Tipo: string;
}

interface OwnProps extends WithStyles<typeof styles> {
  anexos?: Anexo[];
  onclick?: () => void;
}

function PreviewItem(props: OwnProps) {
  const { anexos, classes, onclick } = props;
  const [loading, setLoading] = useState(true);

  function getImage(chave: string, tipo: string) {
    if (chave.length > 0)
      api.get(`/task/anexo?chave=${chave}&tipo=${tipo}`).then(resp => {
        if (resp.status === 200) setLoading(false);
      });
  }

  return (
    <>
      <Grid container className={classes.root}>
        {anexos &&
          anexos.map(anexo => {
            return (
              <Grid onClick={onclick} key={anexo.Chave} item className={classes.item}>
                {loading && (
                  <div className={classes.loading}>
                    <Progressbar />
                  </div>
                )}
                {!loading && (
                  <>
                    <embed
                      className={classes.img}
                      src={`${HOST}/temp/anexos/${anexo.Chave}.${anexo.Tipo}`}
                    />
                    <Typography className={classes.imgHeader} color="textPrimary">
                      {anexo.Nome}
                    </Typography>
                  </>
                )}
                {getImage(anexo.Chave, anexo.Tipo)}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default withStyles(styles)(PreviewItem);
