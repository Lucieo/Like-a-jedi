import React from 'react';
import {Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, makeStyles} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import {OutlinedButton} from 'Components/Buttons';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    margin:10
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  panel:{
    background:'transparent',
    border:'1px solid rgb(77, 212, 195)',
    width:'100%'
  },
  image:{
    maxWidth:'100%'
  },
  missionBody:{
    padding:20
  }
}));

export default function ExpansionCard({item}) {
  const classes = useStyles();

  return (
  <Grid item xs={12} className={classes.root}>
    <ExpansionPanel className={classes.panel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={{color:'rgb(77, 212, 195)'}} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
      <Grid container justify='space-between'>
        <Grid item>
          <Typography className={classes.heading}>
            {item.title}
          </Typography>
        </Grid>
        <Grid item>
          {[...Array(item.level)].map((el,key)=><StarIcon key={key} style={{color:'rgb(77, 212, 195)'}}/>)}
        </Grid>
      </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item>
            <img src={item.image} className={classes.image}/>
          </Grid>
          <Grid item>
            <Typography variant='body2' className={classes.missionBody}>
              {item.detail}
            </Typography>
            <OutlinedButton
              text='Start Mission'
              color='rgb(77, 212, 195)'
            />
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Grid>
  )
}
