import React from 'react';
import PageBase from 'Components/PageBase';
import {Typography, List, ListItem, ListItemText} from '@material-ui/core';

const nounCredits = [
  'Millenium Falcon by Henning Gross from the Noun Project',
  'sport car by Eucalyp from the Noun Project',
  'C3PO by Jake Dunham from the Noun Project',
  'jeans by Nook Fulloption from the Noun Project',
  'run by Brad Avison from the Noun Project',
  'Injury by BomSymbols from the Noun Project',
  'Cup by Serhii Smirnov from the Noun Project',
  'emotion by Alina Oleynik from the Noun Project',
  'clover by Alina Oleynik from the Noun Project',
  'armor by dDara from the Noun Project',
  'B1 Battle Droid by Alone forever from the Noun Project',
  'Gun by Eucalyp from the Noun Project',
  'Porg by habione 404 from the Noun Project',
  'r2d2 by Jake Dunham from the Noun Project',
  'Storm Trooper by Jonas Nullens from the Noun Project',
  'Darth Vader by Jake Dunham from the Noun Project',
  'stick by Mete Eraydın from the Noun Project',
  'Scepter by parkjisun from the Noun Project',
  'Light Saber by Outlier Solutions from the Noun Project',
]

export default function Credits(){
  return(
    <PageBase title='Credits' hideInfo={true}>
      <Typography>Nice icons from the noun project</Typography>
      <List>
        {
          nounCredits.map((element, key)=>
          <ListItem>
            <ListItemText key={key} primary={<Typography variant='body2'>{element}</Typography>}/>
          </ListItem>
          )
        }
      </List>
    </PageBase>

  )
}
