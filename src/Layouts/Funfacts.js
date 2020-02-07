import React from 'react';
import withCheckMode from 'Components/CheckMode';
import {Typography, Grid} from '@material-ui/core';
import facts from 'Data/facts';
import PageBase from 'Components/PageBase';
import styles from 'Style/AppStyle';
import ThumbnailCard from 'Components/Cards/ThumbnailCard';

function Funfacts(props){
  const [currentFact, setCurrentFact] = React.useState(undefined)

  const displayThumbnails =()=>{
    return facts.map((fact, key)=>{
          return(
            <ThumbnailCard
              item={fact}
              key={key}
              clickAction={()=>setCurrentFact(fact)}
              focus={fact===currentFact}
            />
          )

      })

  }

    return(
      <PageBase title="Fun Facts">
        <Grid container>
        {displayThumbnails()}
        </Grid>
        <div style={styles.inventoryBox}>
          {
            currentFact
            ?
            <>
              <Typography style={styles.partTitle}>{currentFact.title}</Typography>
              <Typography variant='body2'>{currentFact.detail}</Typography>
            </>
            :<Typography>Click on any icon to discover a star wars movie fact</Typography>
          }
        </div>
      </PageBase>
    )
}

export default withCheckMode(Funfacts)
