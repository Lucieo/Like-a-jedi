import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab, withStyles} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';
import { green, red } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    cursor:'pointer',
  },
  selectedTab:{
    color:'#eedb01!important'
  },
  indicator:{
    background:'#eedb01'
  }
});

const CustomTab = withStyles({
  selected:{
    color:'#eedb01'
  }
})(Tab);

function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={props.history.location.pathname}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
        classes={{ indicator: classes.indicator }}
      >
        <Tab label="Gear"
          value="/gear"
          component={Link}
          to='/gear'
        />
        <Tab label="Spaceships"
          value="/spaceships"
          component={Link}
          to='/spaceships'
        />
        <Tab label="Missions"
          value="/missions"
          component={Link}
          to='/missions'
        />
        <Tab label="Profile"
          value="/profile"
          component={Link}
          to='/profile'
        />
        <Tab label="Did you know?"
          value="/funfacts"
          component={Link}
          to='/funfacts'
        />
      </Tabs>
    </Paper>
  );
};

export default withRouter(CenteredTabs)
