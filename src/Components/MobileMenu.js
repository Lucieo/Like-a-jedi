import React from 'react';
import {Drawer, ListItem, List, ListItemText, makeStyles} from '@material-ui/core';
import {Store} from 'Store';
import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  paper: {
    background: '#1d1d1d',
  },
  link:{
    fontFamily:"'Montserrat', sans-serif",
    fontWeight:'bold'
  }
});

export default (props)=>{
  const {state, dispatch} = React.useContext(Store);
  const toggleMobile=()=>dispatch({type:'TOGGLE_INFO', field:'mobileMenuOpen'})
  const styles = useStyles();

  return(
    <Drawer
      open={state.mobileMenuOpen}
      onClose={toggleMobile}
      classes={{ paper: styles.paper }}
      >
        <List>
          {props.items.map((el, index) => (
            <ListItem
              button
              component={props => <Link to={el.value} {...props} />}
              onClick={toggleMobile}
            >
              <ListItemText primary={el.label} classes={{primary:styles.link}} />
            </ListItem>
          ))}
      </List>
    </Drawer>
  )
}
