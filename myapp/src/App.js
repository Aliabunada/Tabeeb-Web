import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import $ from "jquery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import SignIndoctor from './components/LoginDoctor';
import SignInpatient from './components/Loginpatient';
import Signupdoctor from './components/SignupDoctor';
import Signuppatient from './components/SignupPatients';
function getdatadb(event){

  // event.preventDefault();
  $.ajax({
    url: '/1', 
    type : "get",
     dataType : 'json',
    success: (data) => {
      console.log("success recive!!!",data)},
    error: (err) => {
      console.log('err', err);
    }
  });
}
function App() {
  getdatadb();
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
        
          <Switch>
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
        </Switch>
          </Router>
          
    </div>
    

  );
}

export default App;
