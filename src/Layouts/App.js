import React from 'react';
import {Route} from 'react-router-dom';
import Home from 'Layouts/Home';
import Spaceships from 'Layouts/Spaceships';
import Equipment from 'Layouts/Equipment';
import Header from 'Layouts/Header';
import Profile from 'Layouts/Profile';
import Missions from 'Layouts/Missions';
import Funfacts from 'Layouts/Funfacts';
import Message from 'Components/Message';
import "Styles/App.css";
import {ThemeProvider } from '@material-ui/core/styles';
import theme from 'Layouts/Theme';


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
        <Message/>
      </div>
    </ThemeProvider>
  );
}

export default App;
