import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

// Material components
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  withStyles,
  WithStyles,
} from '@material-ui/core';

// Material icons
import {
  ArrowForwardIos as ArrowForwardIosIcon,
  Payment as PaymentIcon,
  PeopleOutlined as PeopleIcon,
  Code as CodeIcon,
  Store as StoreIcon,
} from '@material-ui/icons';

// Component styles
import { styles } from './styles';

import notifications from './notifications';

const icons: any = {
  order: {
    icon: <PaymentIcon />,
    color: 'blue',
  },
  user: {
    icon: <PeopleIcon />,
    color: 'red',
  },
  product: {
    icon: <StoreIcon />,
    color: 'green',
  },
  feature: {
    icon: <CodeIcon />,
    color: 'purple',
  },
};

function NotificationList(props: WithStyles<typeof styles>) {
  const { classes } = props;

  return (
    <div>
      {notifications.length > 0 ? (
        <Fragment>
          <div className={classes.header}>
            <Typography variant="h6">User Notifications</Typography>
            <Typography className={classes.subtitle} variant="body2">
              {notifications.length} new notifications
            </Typography>
          </div>
          <div className={classes.content}>
            <List component="div">
              {notifications.map(notification => (
                <>
                  <ListItem className={classes.listItem} component="div">
                    <ListItemIcon
                      className={classes.listItemIcon}
                      style={{ color: icons[notification.type].color }}
                    >
                      {icons[notification.type].icon}
                    </ListItemIcon>
                    <ListItemText
                      classes={{ secondary: classes.listItemTextSecondary }}
                      primary={notification.title}
                      secondary={notification.when}
                    />
                    <ArrowForwardIosIcon className={classes.arrowForward} />
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
            <div className={classes.footer}>
              <Button color="primary" component={Link} size="small" to="#" variant="contained">
                See all
              </Button>
            </div>
          </div>
        </Fragment>
      ) : (
        <div className={classes.empty}>
          <div className={classes.emptyImageWrapper}>
            <img alt="Empty list" className={classes.emptyImage} src="/images/empty.png" />
          </div>
          <Typography variant="h4">There's nothing here...</Typography>
        </div>
      )}
    </div>
  );
}

export default withStyles(styles)(NotificationList);
