import React from 'react';
import Switcher from 'Components/Switcher';
import {AppBar, Grid, Typography, Hidden, withStyles, makeStyles} from '@material-ui/core';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Store} from 'Store';
import MobileMenu from 'Components/MobileMenu';


const navElements =[
  {label:'Equipment', value:'/equipment'},
  {label:'Spaceships', value:'/spaceships'},
  {label:'Missions', value:'/missions'},
  {label:'Profile', value:'/profile'},
  {label:'Fun Facts', value:'/funfacts'}
]

const useStyles = makeStyles(theme=>({
  menuButton: {
    cursor:'pointer'
  },
  grid:{
    padding:'5px 10px'
  },
  appbar:{
    background:'#1d1d1d',
  },
  menuLink:{
    textDecoration:'none',
    padding:"0px 10px",
    fontFamily:"'Montserrat', sans-serif",
    fontWeight:'bold'
  },
  offwhite:{
    color:'#f1ebd5'
  },
  mainLink:{
    paddingRight:20
  }

}));


export default ()=>{
  const classes = useStyles();
  const {state, dispatch} = React.useContext(Store);

  const handleMobileMenu = ()=>{
    dispatch({type:'TOGGLE_INFO', field:'mobileMenuOpen'})
  }

  return(
    <AppBar className={classes.appbar}>
      <Grid
        container
        alignItems='center'
        justify='space-between'
        className={classes.grid}
        >
       <Grid item>
          <Grid container alignItems='center'>


              <Hidden mdUp>
                <Grid item>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={handleMobileMenu}
                  >
                    <MenuIcon className={classes.offwhite}/>
                  </IconButton>
                </Grid>
              </Hidden>

            <Grid item>
              <Grid container>
                <Grid item className={classes.mainLink}>
                  <Link to="/">
                    <Typography variant='h1'>Like a Jedi</Typography>
                  </Link>
                </Grid>
                <Hidden smDown>
                  {navElements.map((el,key)=>{return(
                    <Grid item key={key}>
                      <Link to={el.value}>
                        <Typography className={classes.menuLink}>{el.label}</Typography>
                      </Link>
                    </Grid>
                  )})}
                </Hidden>
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        <Grid item>
          <Switcher/>
        </Grid>

      </Grid>
      <Hidden mdUp>
        <MobileMenu items={navElements}/>
      </Hidden>
    </AppBar>
  )
}
