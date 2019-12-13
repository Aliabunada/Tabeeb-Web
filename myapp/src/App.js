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
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Home from './components/Homepagr';
import EventCalender from './components/calender';
import c from './components/calendertest';
import AppointmentApp from './components/Test'
// import Image from 'material-ui-image'
// import Image from 'material-ui-image'
// const styles = {
//   paperContainer: {
//       height: 1356,
//       backgroundImage: `url(${"/src/image.jpg"})`
//   }
// };
function App() {

  return (
    <div className="App" >
      <Router>
     
      

           <Switch>
          <Route path="/" exact component={HOme}>

          </Route>
<Route path="/ss" component={AppointmentApp}></Route>
          <Route path="/SignIndoctor" component={SignIndoctor}>
          
          </Route>
          <Route path="/SignInPatient" component={SignInpatient}>
          
          </Route>
          <Route path="/signupdoctor" component={Signupdoctor}>
        
          </Route>
          <Route path="/signuppatient" component={Signuppatient}>
          
          </Route>
          <Route path="/doctorprofile" component={Doctor}>
          
          </Route>
          <Route path="/Homepage" component={Home}>
            {/* <App.hide/> */}
          
          </Route>
          <Route path="/calender"  component={c}></Route>
          {/* <Route path="/calender"  component={EventCalender}></Route> */}
        </Switch>
          </Router> 
          
    </div>
    

  );
}
const HOme = () =>(
<div >
 
<AppBar
      position="static" style={{marginTop:0,marginBottom:50}}>
          
        <Toolbar
      
         >
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
          </IconButton>
          <Typography  variant="h3" noWrap>
          Tabeeb Web
          </Typography>
          </Toolbar>
          </AppBar>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
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
        
          </div>

        
</div>)

export default App;
