import React from 'react';

// Styles
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { styles } from './styles';

// Custom components
import { SubHeader } from '~/components';

function Dashboard({ classes }: WithStyles<typeof styles>) {
  return (
    <div className={classes.root}>
      <SubHeader title="Dashboard" Links={[]} />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt odio tenetur est voluptate
      maiores aspernatur veniam perspiciatis labore! Aspernatur nesciunt molestiae placeat
      architecto sunt quos odit cupiditate, minima nemo.Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. A sunt odio tenetur est voluptate maiores aspernatur veniam perspiciatis
      labore! Aspernatur nesciunt molestiae placeat architecto sunt quos odit cupiditate, minima
      nemo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt odio tenetur est
      voluptate maiores aspernatur veniam perspiciatis labore! Aspernatur nesciunt molestiae placeat
      architecto sunt quos odit cupiditate, minima nemo.Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. A sunt odio tenetur est voluptate maiores aspernatur veniam perspiciatis
      labore! Aspernatur nesciunt molestiae placeat architecto sunt quos odit cupiditate, minima
      nemo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt odio tenetur est
      voluptate maiores aspernatur veniam perspiciatis labore! Aspernatur nesciunt molestiae placeat
      architecto sunt quos odit cupiditate, minima nemo.Lorem ipsum dolor, sit amet consectetur
      adipisicing elit. A sunt odio tenetur est voluptate maiores aspernatur veniam perspiciatis
      labore! Aspernatur nesciunt molestiae placeat architecto sunt quos odit cupiditate, minima
      nemo.Lorem ipsum dolor, sit amet consectetur adipisicing elit. A sunt odio tenetur est
      voluptate maiores aspernatur veniam perspiciatis labore! Aspernatur nesciunt molestiae placeat
      architecto sunt quos odit cupiditate, minima nemo. border:
    </div>
  );
}

export default withStyles(styles)(Dashboard);
