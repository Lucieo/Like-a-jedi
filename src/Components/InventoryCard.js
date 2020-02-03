import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';


const styles={
  inventoryItemWrap:{
    background: 'radial-gradient(#1d1d1d, #2f2f2f)',
    width:100,
    height:100,
    borderRadius:10,
    display: 'inline-block',
    margin: 10
  },
  svgIcon:{
    maxHeight:'100%'
  },
  crossIcon:{
    position:'absolute',
    color:'cyan',
    padding:4
  }
}

export default function InventoryCard(props){
  const SvgIcon = props.element.image
  return(
    <div style={styles.inventoryItemWrap}>
      <div><ClearIcon style={styles.crossIcon}/></div>
      <SvgIcon style={styles.svgIcon} fill={'cyan'}/>
    </div>
  )
}
