import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core';
import Store from 'Store';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';


const useStyles = makeStyles({
  card: {
    height:'100%',
    maxWidth:375
  },
  media: {
    height: 200,
    backgroundSize:'contain'
  }
});

export default function MediaCard(props) {
  const classes = useStyles();

  return (
    <Grid item sm>
      <Card className={classes.card}>
        <CardActionArea onClick={()=>props.clickAction()}>
          <CardMedia
            className={classes.media}
            image={props.element.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.element.name}
              {props.selected && <CheckCircleIcon/>}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
