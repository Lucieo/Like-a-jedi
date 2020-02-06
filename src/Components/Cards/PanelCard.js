import React from 'react';
import {Grid, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography, makeStyles} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarIcon from '@material-ui/icons/Star';
import {OutlinedButton} from 'Components/Buttons';
import {Cup} from 'media/icons';
import AttributesList from 'Components/AttributesList';
import {getIcon} from 'Components/Popups/MessageDialog';

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
  },
  deactivatedPanel:{
    border:'1px solid gray'
  },
  deactivatedText:{
    color:'gray'
  }
}));

export default function ExpansionCard({
  item,
  realized,
  clickAction,
}) {
  const classes = useStyles();
  const won = (realized && ['win'].includes(realized.status))? true : false

  return (
  <Grid item xs={12} className={classes.root}>
    <ExpansionPanel className={realized? `${classes.panel} ${classes.deactivatedPanel}` :classes.panel}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon style={realized? {color:'gray'} :{color:'rgb(77, 212, 195)'}} />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
      <Grid container justify='space-between'>
        <Grid item xs={8}>
          <Grid container alignItems='center'>
            <Typography className={realized?`${classes.heading} ${classes.deactivatedText}`:classes.heading}>
              {item.title}
            </Typography>
            {won && <Cup fill='rgb(77, 212, 195)' style={{minWidth:30}}/>}
          </Grid>
        </Grid>
        <Grid item>
          {[...Array(item.level)].map((el,key)=><StarIcon key={key} style={realized? {color:'gray'} :{color:'rgb(77, 212, 195)'}}/>)}
        </Grid>
      </Grid>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Grid container>
          <Grid item>
            <AttributesList attributes={['location','credit-bonus', 'experience-bonus']} item={item}/>
            <img src={item.image} className={classes.image} alt='item'/>
          </Grid>
          <Grid item>
            <Typography variant='body2' className={classes.missionBody}>
              {item.detail}
            </Typography>
            {
              realized
              ?<Typography>{getIcon(realized.status, "#f1ebd5")} MISSION DONE</Typography>
              :<OutlinedButton
                text='Start Mission'
                color='rgb(77, 212, 195)'
                clickAction={clickAction}
              />
            }
          </Grid>
        </Grid>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  </Grid>
  )
}
