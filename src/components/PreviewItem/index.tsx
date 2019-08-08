import React, { useState } from 'react';
import { MdAttachFile, MdFileDownload } from 'react-icons/md';

// Material components
import { Grid, Typography, Button } from '@material-ui/core';

// Material styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';
import api, { HOST } from '~/services/api';
import { Progressbar, Dialog } from '~/components';

// Custom components
import { extensions } from '~/config/fileExtensions';

// Icons
import wordIcon from '~/assets/icons/icon-word.svg';
import excelIcon from '~/assets/icons/icon-excel.svg';
import outlookIcon from '~/assets/icons/icon-outlook.svg';
import pdfIcon from '~/assets/icons/icon-pdf.png';

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
  const { anexos, classes } = props;
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = React.useState(false);
  const [component, setComponent] = React.useState();
  const URL_VIEW = 'https://view.officeapps.live.com/op/view.aspx?src=';

  React.useEffect(() => {
    setLoading(true);
  }, [anexos]);

  function getImage(chave: string, tipo: string) {
    if (chave.length > 0) {
      api.get(`/task/anexo?chave=${chave}&tipo=${tipo}`).then(resp => {
        if (resp.status === 200) setLoading(false);
      });
    }
  }

  function RenderAction() {
    return <Button onClick={() => setOpen(false)}>Fechar</Button>;
  }

  function RenderThumbnails(anexo: Anexo) {
    if (extensions.images.includes(anexo.Tipo.toLowerCase()))
      return (
        <img
          className={classes.img}
          src={`${HOST}/temp/anexos/${anexo.Chave}.${anexo.Tipo}`}
          alt={anexo.Nome}
        />
      );

    if (['doc', 'docx'].includes(anexo.Tipo))
      return <img className={classes.img} src={wordIcon} alt={anexo.Nome} />;

    if (['xls', 'xlsx'].includes(anexo.Tipo))
      return <img className={classes.img} src={excelIcon} alt={anexo.Nome} />;

    if (['msg'].includes(anexo.Tipo))
      return <img className={classes.img} src={outlookIcon} alt={anexo.Nome} />;

    if (['pdf'].includes(anexo.Tipo))
      return <img className={classes.pdf} src={pdfIcon} alt={anexo.Nome} />;

    return (
      <div className={classes.files}>
        <MdAttachFile className={classes.iconFile} />
      </div>
    );
  }

  function RenderContentDialog(anexo: Anexo) {
    let ComponentRender;
    if (extensions.images.includes(anexo.Tipo.toLowerCase()))
      ComponentRender = (
        <img
          className={classes.imgDetails}
          src={`${HOST}/temp/anexos/${anexo.Chave}.${anexo.Tipo}`}
          alt=""
        />
      );
    else if (['doc', 'docx', 'xls', 'xlsx'].includes(anexo.Tipo))
      ComponentRender = (
        <iframe
          src={`${URL_VIEW}${HOST}/temp/anexos/${anexo.Chave}.${anexo.Tipo}`}
          frameBorder="0"
          title={anexo.Nome}
          className={classes.iframe}
        />
      );
    else if (['pdf'].includes(anexo.Tipo))
      ComponentRender = (
        <embed
          src={`${HOST}/temp/anexos/${anexo.Chave}.${anexo.Tipo}`}
          className={classes.iframe}
        />
      );
    else
      ComponentRender = (
        <div className={classes.files}>
          <Typography className={classes.textNotFile}>
            Não conseguimos visualizar este arquivo, deseja realizar o download para o computador?
          </Typography>
          <MdFileDownload
            onClick={() =>
              window.open(`${HOST}/temp/anexos/${anexo.Chave}.${anexo.Tipo}`, '_blank')
            }
            className={classes.iconDownload}
          />
        </div>
      );

    setComponent(ComponentRender);
    setOpen(true);
  }

  return (
    <>
      <Dialog
        open={open}
        setOpen={setOpen}
        dialogActions={RenderAction()}
        maxWidth="lg"
        dialogContent={component}
        fullWidth
      />

      <Grid container className={classes.root}>
        {anexos &&
          anexos.map(anexo => {
            getImage(anexo.Chave, anexo.Tipo);
            return (
              <Grid
                onClick={() => RenderContentDialog(anexo)}
                key={anexo.Chave}
                item
                className={classes.item}
              >
                {loading && (
                  <div className={classes.loading}>
                    <Progressbar />
                  </div>
                )}
                {!loading && (
                  <>
                    {RenderThumbnails(anexo)}
                    <Typography className={classes.imgHeader} color="textPrimary">
                      {anexo.Nome}
                    </Typography>
                  </>
                )}
              </Grid>
            );
          })}
      </Grid>
    </>
  );
}

export default withStyles(styles)(PreviewItem);
