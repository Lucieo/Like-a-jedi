import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {Link, withRouter} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    cursor:'pointer',
  },
  selectedTab:{
    color:'#eedb01!important'
  }
});

const tabList =[
  {label:'Gear', value:'/gear'},
  {label:'Spaceships', value:'/spaceships'},
  {label:'Missions', value:'/missions'},
  {label:'Profile', value:'/profile'},
  {label:'Fun Facts', value:'/funfacts'}
]


function CenteredTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.root}>
      <Tabs
        value={props.history.location.pathname!=='/'?props.history.location.pathname : false }
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
      {
        tabList.map((el, key)=> <Tab key={key} label={el.label} value={el.value} component={Link} to={el.value}/>)
      }
      </Tabs>
    </Paper>
  );
};

export default withRouter(CenteredTabs)
