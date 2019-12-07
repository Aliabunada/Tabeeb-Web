import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
// import $ from "jquery";
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
import Home from './components/Homepagr';
function App() {

  return (
    <div className="App">
      <Router>
        <a href="/SignInPatient">  <Button style={{margin:20 , marginRight:25}} type="submit" variant="contained" color="primary"  >
             {/* <a href="http://localhost:3000/signUppatient"></a> */}
            SignIn Patient
          </Button> </a>
    
        <a  href="/SignIndoctor"> <Button style={{margin:20 }}type="submit" variant="contained" color="primary" > SignIn Doctor</Button> </a>
          
          
          <br></br>
          <br></br>
          <br></br>
    <a href="/signuppatient"><Button style={{margin:20 , marginRight:25}} type="submit" variant="contained" color="primary" > 
            SignUp Patient
          </Button> </a>
          
          <a href="/signupdoctor">   <Button style={{margin:20 }} type="submit" variant="contained"  color="primary" > SignUp Doctor </Button></a>
        
          <br></br>
          <br></br>
          <br></br>
    <a href="/doctorprofile"><Button style={{margin:20 , marginRight:25}} type="submit" variant="contained" color="primary" > 
          doctor profile
          </Button> </a>
          
          <a href="/Homepage">   <Button style={{margin:20 }} type="submit" variant="contained"  color="primary" > HOmepage </Button></a>
        
          <Switch>
          {/* <Route path="/SignInPatient">
            <SignIndoctor />
          </Route> */}
          <Route path="/SignIndoctor">
            <SignIndoctor />
          </Route>
          <Route path="/SignInPatient">
            <SignInpatient />
          </Route>
          <Route path="/signupdoctor">
            <Signupdoctor />
          </Route>
          <Route path="/signuppatient">
            <Signuppatient />
          </Route>
          <Route path="/doctorprofile">
            <Doctor />
          </Route>
          <Route path="/Homepage">
            {/* <App.hide/> */}
            <Home />
          </Route>
        </Switch>
          </Router>
          
    </div>
    

  );
}

export default App;
