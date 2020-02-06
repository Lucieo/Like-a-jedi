import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography, List, ListItem, ListItemText} from '@material-ui/core';
import AttributesList from 'Components/AttributesList';

const useStyles = makeStyles({
  card: {
    width:'100%',
    background:'transparent',
    border:'1px solid rgb(77, 212, 195)',
    margin:10
  },
  selectedCard:{
    background:"rgba(77, 212, 195, 0.1)"
  },
  media: {
    maxWidth:'100%',
    height:80
  },
  cardActionArea:{
    height:'100%'
  },
  cardText:{
    fontFamily:'Montserrat, sans-serif',
    color:'rgb(77, 212, 195)'
  }
});

const attributes = ['armor', 'attack']

export default function ListCard({
  item,
  selected,
  clickAction
}) {
  const classes = useStyles();
  const SvgIcon = item.image

  return (
  <Card className={selected ? `${classes.card} ${classes.selectedCard}` : classes.card}>
    <CardContent className={classes.cardContent}>
      <CardActionArea className={classes.cardActionArea} onClick={()=>clickAction()}>
        <Grid container>
          <Grid item sm={2}>
            <SvgIcon fill={'rgb(77, 212, 195)'} className={classes.media}/>
          </Grid>
          <Grid item sm={8}>
            <Typography gutterBottom variant="h6" className={classes.cardText}>
              {item.name}
            </Typography>
            <AttributesList item={item} attributes={['armor','attack']}/>
          </Grid>
          <Grid item sm={2}>
            <Typography gutterBottom variant="h6" className={classes.cardText}>
              {selected
                ? 'sell '
                : 'buy '
              }
              {item.price} GC
            </Typography>
          </Grid>
        </Grid>
      </CardActionArea>
    </CardContent>
  </Card>
  );
}
