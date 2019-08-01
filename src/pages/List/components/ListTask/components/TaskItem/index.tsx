import React from 'react';

// Material components
import { Card, CardActionArea, Typography, Tooltip } from '@material-ui/core';

// Material icons
import { AttachFile as AttachFileIcon, Beenhere as BeenhereIcon } from '@material-ui/icons';

// Material styles
import { WithStyles, withStyles } from '@material-ui/core/styles';
import { styles } from './styles';

import { Task } from '~/store/modules/tasks/types';
import { statusSituacao } from '~/config/colorsStatus';

interface OwnProps extends WithStyles<typeof styles> {
  task: Task;
}

function TaskItem(props: OwnProps) {
  const { classes, task } = props;

  function handleStatusColor() {
    const resp: any = statusSituacao.find(item => item.id === task.idSituacao && item.color);
    return resp.color;
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.card}>
        <div>
          <Typography noWrap className={classes.empresa}>
            <b>{task.ExecutionId}</b> - {task.ClienteAt}
          </Typography>
          <Typography noWrap className={classes.produto}>
            {task.Produto}
          </Typography>
          <Typography noWrap className={classes.serie}>
            {task.Serie}
          </Typography>
          <Typography noWrap className={classes.servico}>
            {task.Servico}
          </Typography>
          <Typography noWrap className={classes.data}>
            {task.DataCr}

            <span className={classes.rootIcons}>
              {task.Rat && task.Rat.length > 0 && (
                <Tooltip title="Rat" placement="top">
                  <BeenhereIcon fontSize="inherit" className={classes.rat} />
                </Tooltip>
              )}

              {task.Cit && task.Cit.length > 0 && (
                <Tooltip title="Cit" placement="top">
                  <BeenhereIcon fontSize="inherit" className={classes.cit} />
                </Tooltip>
              )}

              {task.Anexos && task.Anexos.length > 0 && (
                <Tooltip title="Anexo" placement="top">
                  <AttachFileIcon fontSize="inherit" className={classes.anexo} />
                </Tooltip>
              )}

              <Tooltip title={task.Situacao} placement="top">
                <span className={classes.status} style={{ background: handleStatusColor() }} />
              </Tooltip>
            </span>
          </Typography>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default withStyles(styles)(TaskItem);
