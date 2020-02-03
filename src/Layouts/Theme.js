import { createMuiTheme } from '@material-ui/core/styles';
import {yellow} from '@material-ui/core/colors';

const theme = createMuiTheme(
{
  palette: {
    primary: yellow,
  }
}
);
theme.typography.h1={
  color:'#f1ebd5',
  fontSize:'medium',
  fontFamily:'Audiowide, cursive'
}

theme.typography.h2={
  color:'#f1ebd5',
  fontFamily:'Audiowide, cursive',
  fontSize:'xx-large'
}

theme.typography.h3={
  color:'#f1ebd5',
  fontFamily:'Audiowide, cursive',
  fontSize:'x-large'
}

theme.typography.body1={
  color:'#f1ebd5',
  fontFamily:'Audiowide, cursive',
}



export default theme;
