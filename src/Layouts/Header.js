import React from 'react';
import TabBar from 'Components/TabBar';
import Switcher from 'Components/Switcher';
import 'Styles/Header.css';
import {AppBar, Grid, withStyles} from '@material-ui/core';
import logo from 'media/starwarslogo.png';
import {Link} from 'react-router-dom';


const CustomGrid = withStyles({
  root:{
    background:'black',
    padding:'5px 10px'
  }
})(Grid);

export default ()=>{
  return(
    <AppBar>
      <CustomGrid container alignItems='center' justify='space-between'>
        <Grid item>
          <Link to="/">
            <img src={logo} alt='star wars logo'/>
          </Link>
        </Grid>
        <Grid item>
          <Switcher/>
        </Grid>
      </CustomGrid>
      <TabBar/>
    </AppBar>
  )
}
