import React from 'react';
import {TextField, Grid, makeStyles} from '@material-ui/core';
import {Store} from 'Store';
import {OutlinedButton} from 'Components/Buttons';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth:300,
    '& > *': {
      margin: theme.spacing(1),
      fontFamily:'Audiowide, sans-serif',
      color:"#f1ebd5!important",
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          borderColor: '#f1ebd5!important'
        },
      },
      '& .MuiInputBase-input':{
        textAlign:'center',
        background:'black'
      },
    },
  },
}));



export default function TextForm(props) {
  const classes = useStyles();
  const {state, dispatch} = React.useContext(Store);
  const [name, setValue] = React.useState(undefined);

  const handleClick=()=>{
    dispatch(
      {type:'ADD_INFO',
      payload:name.charAt(0).toUpperCase()+name.slice(1).toLowerCase(),
      field:props.fieldname}
    );
  }

  const handleChange = event => {
    setValue(event.target.value);
  };


  return (
    <Grid
    container
    className={classes.root}
    justify='center'
    >
      <TextField
        className={classes.root}
        id="text-field"
        variant="outlined"
        onChange={handleChange}
        inputProps={{
          maxLength: 20,
          placeholder:props.placeholder, style:{background:props.color}
        }}
      />
      <OutlinedButton
      variant='outlined'
      clickAction={handleClick}
      text='Validate'
      color='#f1ebd5'/>
    </Grid>
  );
}
