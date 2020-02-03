import React from 'react';
import {Store} from 'Store';
import {Typography, Grid, Button} from '@material-ui/core';
import logo from 'media/starwarslogo.png';
import TextForm from 'Components/TextForm';
import {OutlinedButton} from 'Components/Buttons';
import StarsMovie from 'media/Stars.mp4';
import StarsBg from 'media/spacebg.jpg';

const styles={
  videoBg:{
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    zIndex: -100
  },
  video:{
    position: 'absolute',
    top: 0,
    left: 0,
    width: 'auto',
    height: '100%'
  },
  contentWrapper:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    height:'calc(100vh - 120px)',
    textAlign:'center'
  },
  offwhite:{
    color:'#f1ebd5'
  },
  logo:{
    maxWidth:400,
    width:'100%'
  },
  welcome:{
    overflowWrap:'break-word'
  }
}





export default function Home(props){
  const {state, dispatch} = React.useContext(Store);

  const getWelcomeMessage=()=>{
    if(state.mode==='jedi'){
      return state.name
      ? `May the force be with you ${state.name}`
      : 'Welcome Rebel'
    }
    else{
      return state.name
      ? `Stormtrooper ${state.name} report for duty`
      : 'Welcome Stormtrooper'
    }
  }

  const getAction=()=>{
    return state.name
    ? <OutlinedButton
      color='yellow'
      text='Check your profile'
      clickAction={()=>props.history.push('/profile')}
      />
    : <>
      <Typography style={styles.offwhite}>
      What's your name?
      </Typography>
      <TextForm fieldname='name'/>
    </>
  }

    return(
      <div>
        <div style={styles.videoBg}>
          <video autoPlay loop muted poster={StarsBg} id="bgvid" style={styles.video} src={StarsMovie}/>
        </div>
        <div style={styles.contentWrapper}>
          <img src={logo} alt='logo star wars' style={styles.logo}/>
          <Typography variant='h2' align='center' style={styles.welcome}>
            {getWelcomeMessage()}
          </Typography>
            {getAction()}
        </div>
      </div>

    )
}
