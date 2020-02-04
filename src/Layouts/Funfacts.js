import React from 'react';
import CheckMode from 'Components/CheckMode';
import {Typography} from '@material-ui/core';
import facts from 'Data/facts';
import PageBase from 'Components/PageBase'

function Funfacts(props){
    return(
      <PageBase title="Fun Facts">
        <Typography></Typography>
      </PageBase>
    )
}

export default CheckMode(Funfacts)
