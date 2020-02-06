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
  fontFamily:'Audiowide, sans-serif'
}

theme.typography.h4={
  color:'#f1ebd5',
  fontSize:'x-large',
  fontFamily:'Audiowide, sans-serif'
}

theme.typography.h2={
  color:'#f1ebd5',
  fontFamily:'Audiowide, sans-serif',
  fontSize:'xx-large'
}

theme.typography.h3={
  color:'#f1ebd5',
  fontFamily:'Audiowide, sans-serif',
  fontSize:'x-large'
}

theme.typography.body1={
  color:'#f1ebd5',
  fontFamily:'Audiowide, sans-serif',
}

theme.typography.body2={
  color:'#f1ebd5',
  fontFamily:"'Montserrat', sans-serif",
}




export default theme;
