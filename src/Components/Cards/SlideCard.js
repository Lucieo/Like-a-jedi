import React from 'react';
import {Grid, Typography, Paper} from '@material-ui/core';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AttributesList from 'Components/AttributesList';
import {OutlinedButton} from 'Components/Buttons';

const styles={
  pad20:{
    padding:20
  },
  partWrapper:{
    maxWidth:800,
    padding:20,
    margin:'0 auto'
  },
  arrows:{
    color:"#f1ebd5",
    cursor:'pointer',
  },
  centered:{
    textAlign:'center'
  },
  vignette:{
    maxWidth:100,
    padding:20
  },
  mainImage:{
    maxWidth:'100%',
    height:250
  },
  paper:{
    background:'radial-gradient(rgb(29, 29, 29), rgb(47, 47, 47))',
    padding:20,
    margin: 20,
    boxShadow: '0 -1px 20px rgb(77, 212, 195)',
    borderRadius:10
  }
}



export default function SlideCard({
  item,
  nextAction,
  prevAction,
  selectAction,
  selected,
  clickAction}){
  const SvgIcon = item.image
  return(
    <Grid container alignItems='center' justify='center'>
      <Grid item xs={1}>
        <ArrowBackIosIcon
        onClick={()=>prevAction()}
        style={styles.arrows}
        />
      </Grid>

      <Grid item xs={8} style={styles.centered}>
        <Paper style={styles.paper}>
          <Typography align='center' style={{minHeight:21}}>
            {selected &&'SELECTED'}
          </Typography>
          {
            item.imageType==='svg'
            ?<SvgIcon style={styles.mainImage} fill={'rgb(77, 212, 195)'}/>
            :<img src={item.image} style={styles.mainImage}/>
          }
          <Typography variant="h3">
            {item.name}
          </Typography>

          <AttributesList item={item} attributes={['armor','attack', 'price']}/>

          <OutlinedButton
            text={selected ? 'UNSELECT' : 'SELECT'}
            color='rgb(77, 212, 195)'
            clickAction={()=>clickAction(item)}
          />
        </Paper>
      </Grid>

      <Grid item xs={1} style={{textAlign:'center'}}>
        <ArrowForwardIosIcon onClick={()=>nextAction()}
        style={styles.arrows}
        />
      </Grid>
    </Grid>
  )
}
