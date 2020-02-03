import React from 'react';
import {TextField, FormControl, Button, makeStyles} from '@material-ui/core';
import {Store} from 'Store';
import {OutlinedButton} from 'Components/Buttons';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily:'Audiowide, cursive',
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
  const {store, dispatch} = React.useContext(Store);
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
    <div className={classes.root}>
      <div>
        <TextField
          className={classes.root}
          id="text-field"
          variant="outlined"
          onChange={handleChange}
          inputProps={{ maxLength: 20, placeholder:props.placeholder, style:{background:props.color} }}
        />
      </div>
      <OutlinedButton variant='outlined' clickAction={handleClick} text='Validate' color='#f1ebd5'/>
    </div>
  );
}
