import React from 'react';
import {Route} from 'react-router-dom';
import Home from 'Layouts/Home';
import Spaceships from 'Layouts/Spaceships';
import Gear from 'Layouts/Gear';
import Header from 'Layouts/Header';
import Profile from 'Layouts/Profile';
import Missions from 'Layouts/Missions';
import Funfacts from 'Layouts/Funfacts';
import Message from 'Components/Message';
import { Store } from 'Store';
import "Styles/App.css";

function App() {
  return (
    <div>
      <Header/>
      <Route path='/' exact component={Home}/>
      <Route path='/gear' component={Gear}/>
      <Route path='/spaceships' component={Spaceships}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/missions' component={Missions}/>
      <Route path='/funfacts' component={Funfacts}/>
      <Message/>
    </div>
  );
}

export default App;
