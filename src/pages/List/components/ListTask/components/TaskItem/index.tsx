import React from 'react';

// Material components
import { Card, CardActionArea, Typography, Tooltip } from '@material-ui/core';

// Material icons
import { AttachFile as AttachFileIcon, Beenhere as BeenhereIcon } from '@material-ui/icons';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

function TaskItem(props: WithStyles<typeof styles>) {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <div>
          <Typography noWrap className={classes.empresa}>
            <b>35065</b> - STOQUE SOLUÇÕES TECNOLOGICAS
          </Typography>
          <Typography noWrap className={classes.produto}>
            Ábaris
          </Typography>
          <Typography noWrap className={classes.serie}>
            SÉRIE ASDF234RF23R2F23R
          </Typography>
          <Typography noWrap className={classes.servico}>
            OCO - DESINSTALAÇÃO
          </Typography>
          <Typography noWrap className={classes.data}>
            22/07/2019 10:44
            <span className={classes.rootIcons}>
              <Tooltip title="Rat" placement="top">
                <BeenhereIcon fontSize="inherit" className={classes.rat} />
              </Tooltip>
              <Tooltip title="Cit" placement="top">
                <BeenhereIcon fontSize="inherit" className={classes.cit} />
              </Tooltip>
              <Tooltip title="Anexo" placement="top">
                <AttachFileIcon fontSize="inherit" className={classes.anexo} />
              </Tooltip>
              <Tooltip title="Status da tarefa" placement="top">
                <span className={classes.status} />
              </Tooltip>
            </span>
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(TaskItem);
