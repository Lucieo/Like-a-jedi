import React from 'react';
import CheckMode from 'Components/CheckMode';
import ExpansionPanel from 'Components/ExpansionPanels';
import {Typography} from '@material-ui/core';
import facts from 'Data/facts';

function Funfacts(props){
    return(
      <div style={{maxWidth:600, margin:'0 auto'}}>
        <Typography>Fun facts about star wars movies</Typography>
        <ExpansionPanel items={facts}/>
      </div>
    )
}

export default CheckMode(Funfacts)
