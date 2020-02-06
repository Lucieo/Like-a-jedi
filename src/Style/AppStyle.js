const blue = '#4dd4c3';
const offwhite ='#f1ebd5';
const darkGray = '#1d1d1d';

const styles ={
  profilePicture:{
    height:200,
    width:200,
    borderRadius:'50%',
  },
  inventoryBox:{
    border:`1px solid ${blue}`,
    padding:20,
    borderRadius:5,
    minHeight:200,
    marginTop:20,
    textAlign:'left'
  },
  contentWrapper:{
    padding:20
  },
  partTitle:{
    paddingBottom:10
  },
  pageWrapper:{
    maxWidth:1000,
    padding:20,
    margin:'0 auto'
  },
  videoBg:{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width:'100%',
    height:'100%',
    'objectFit': 'cover',
    zIndex: -100
  },
  breakWord:{
    overflowWrap:'break-word'
  },
  fullHeight:{
    minHeight:'calc(100vh - 80px)'
  }

}

export default styles
