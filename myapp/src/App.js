import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

import SignIndoctor from './components/LoginDoctor';
import SignInpatient from './components/Loginpatient';
import Signupdoctor from './components/SignupDoctor';
import Signuppatient from './components/SignupPatients';
import Doctor from './components/Doctor';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Home from './components/Homepagr';

import c from './components/calendertest';
function App() {
  return (
    <div className="App" >

      <AppBar
        position="static" style={{ marginTop: 0, marginBottom: 50 }}>

        <Toolbar

        >
          <IconButton
            edge="start"

            color="inherit"
            aria-label="open drawer"
          >

          </IconButton>
          <Typography variant="h3" noWrap>
            Tabeeb Web
          </Typography>
        </Toolbar>
      </AppBar>
      <br></br>
      <br></br>
      <br></br>
      <Router>



        <Switch>
          <Route path="/" exact component={SignInpatient}>

          </Route>

          <Route path="/SignIndoctor" component={SignIndoctor}>

          </Route>


          <Route path="/signupdoctor" component={Signupdoctor}>

          </Route>
          <Route path="/signuppatient" component={Signuppatient}>

          </Route>
          <Route path="/doctorprofile" component={Doctor}>

          </Route>
          <Route path="/Homepage" component={Home}>


          </Route>
          <Route path="/calender" component={c}></Route>

        </Switch>
      </Router>

    </div>


  );
}


export default App;
