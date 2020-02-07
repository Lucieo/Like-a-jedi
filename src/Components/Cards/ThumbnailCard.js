import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';


const styles={
  inventoryItemWrap:{
    background: 'radial-gradient(#1d1d1d, #2f2f2f)',
    width:100,
    height:100,
    borderRadius:10,
    display: 'inline-block',
    margin: 10,
    cursor:'pointer',
    border:"1px solid #2f2f2f",
    textAlign:'center'
  },
  svgIcon:{
    maxWidth:'100%',
    maxHeight: '90%',
    marginTop: 10
  },
  crossIcon:{
    position:'absolute',
    color:'rgb(77, 212, 195)',
    padding:4
  },
  focus:{
    border:"1px solid rgb(77, 212, 195)"
  }
}

export default function ThumbnailCard({item, selected, clickAction, focus}){
  const SvgIcon = item.image
  return(
    <div style={focus
      ?{...styles.inventoryItemWrap, ...styles.focus}
      :styles.inventoryItemWrap } onClick={()=>clickAction()}>
      <div>
        {selected && <ClearIcon style={styles.crossIcon}/>}
      </div>
      {
        item.imageType==='svg'
        ?<SvgIcon style={styles.svgIcon} fill={'rgb(77, 212, 195)'}/>
        :<img style={styles.svgIcon} src={item.image} alt='icon'/>
      }
    </div>
  )
}
