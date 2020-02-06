import React from 'react';
import {Route} from 'react-router-dom';
import {Home, Header, Equipment, Spaceships, Profile, Missions, Funfacts, Credits} from 'Layouts';
import MessageSnackbar from 'Components/Popups/MessageSnackBar';
import {MessageDialog} from 'Components/Popups/MessageDialog';
import "Style/App.css";
import {ThemeProvider } from '@material-ui/core/styles';
import theme from 'Style/Theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header/>
        <Route path='/' exact component={Home}/>
        <Route path='/equipment' component={Equipment}/>
        <Route path='/spaceships' component={Spaceships}/>
        <Route path='/profile' component={Profile}/>
        <Route path='/missions' component={Missions}/>
        <Route path='/funfacts' component={Funfacts}/>
        <Route path='/credits' component={Credits}/>
        <MessageSnackbar/>
        <MessageDialog/>
      </div>
    </ThemeProvider>
  );
}

export default App;
