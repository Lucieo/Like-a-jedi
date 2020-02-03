import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles({
  card: {
    height:'100%',
    maxWidth:300,
    background:'transparent',
    border:'1px solid cyan'
  },
  media: {
    maxWidth:'100%',
    height:150
  },
  cardActionArea:{
    height:'100%'
  },
  cardText:{
    fontFamily:'Montserrat, sans-serif',
    color:'cyan'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();
  const SvgIcon = props.element.image

  return (
    <Grid item md={3} sm={4} xs={12} align='center'>
      <CardActionArea className={classes.cardActionArea} onClick={()=>props.clickAction()}>
      <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
      {!props.inventoryMode &&
        <Typography gutterBottom variant="h6" className={classes.cardText}>
          {props.element.name}
          {props.selected && <CheckCircleIcon/>}
        </Typography>
      }
      </CardContent>
          <SvgIcon fill={'cyan'} className={classes.media}/>
      </Card>
    </CardActionArea>
    </Grid>
  );
}
