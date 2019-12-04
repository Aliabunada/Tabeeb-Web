import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { RadioGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import Radio from '@material-ui/core/Radio';

import $ from "jquery";
const Addresses = [
  {
    value: 'Gaza',
    label: 'Gaza',
  },
  {
    value: 'ALnusairat',
    label: 'ALnusairat',
  },
  {
    value: 'Jabalia',
    label: 'Jabalia',
  },
  {
    value: 'Khanyounis',
    label: 'Khan-younis',
  },
  {
    value: 'Rafah',
    label: 'Rafah',
  },
];
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(3),
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  menu: {
    width: 200,
  },
}));
function sending(event){
  event.preventDefault();
var takesenddata ={
  email:$('#email').val(),
  password:$('#password').val(),
  firstName: $('#firstname').val(),
  lastName: $('#lasttname').val(),
  mobilenum: $('#mobilenum').val(),
 
  Address : $('#address').val(),
  Gender : $('#gender').val()
 
}
console.log(takesenddata)
$.ajax({
  url: '/patientregister', 
  type : "post",
  data : takesenddata , 
  dataType : 'json',
  success: (data) => {
    console.log("success send!!!")},
  error: (err) => {
    alert("The Password is less than 6 letters Try again")
    console.log('err', err);
  }
});
}

function Signuppatient() {
  const classes = useStyles();
  const [currency, setCurrency] = React.useState("Gaza");
  const [value, setValue] = React.useState('male');
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    password: '',
    mobilenum: '',
    Email:'',
    Address : '',
    Gender : '',
  });
  const handleChangess = event => {
    setValue(event.target.value);
  };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleChanges = event => {
    setCurrency(event.target.value);
    setValues(event.target.value)
  };


  const handleMouseDownPassword = event => {
    event.preventDefault();
  };
  const theme = {
    spacing: value => value ** 2,
  }

  return (
   
    
  
    <div className="Signuppatient" style={{padding:25,alignItems:'center' }} >
      <h1 style={{marginBottom:54,marginTop:30}}> SignUP As Patient</h1>
     
    
  
  <TextField id="firstname" label="First Name" variant="outlined" className= {classes.menu} onChange={handleChange('firstName')}  />
  <br></br> 
  <br></br>
  <br></br>
  <TextField id="lasttname" label="Last Name" variant="outlined" className= {classes.menu} onChange={handleChange('lastName')}  />
  
      <br></br>
      <br></br>
  <br></br>
    <TextField  
    className= {classes.menu}
      variant="outlined" 
      type = 'password' 
      id='password' 
      label='Password'
      onChange={handleChange('password')} 
      ></TextField>

   
    <br></br>
    <br></br>
    <br></br>
    <TextField className= {classes.menu} id="mobilenum" label="Mobile num" variant="outlined"   onChange={handleChange('mobilenum')}  />
    <br></br>
    <br></br>
    <br></br>
    <TextField className= {classes.menu} id="email" label="Email" variant="outlined"  onChange={handleChange('Email')}/>

    <br></br>
    <br></br>
  <div>
        <TextField
          id="address"
          select
          label="Choose Your Address"
          
          className={classes.textField}
          // value={currency}
          onChange={handleChanges}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your Address"
          margin="normal"
          variant="outlined"
        >

          {Addresses.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>

  <br></br>
    <br></br>
    <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" id = "gender"value={value} onChange={handleChangess}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
         
          
        </RadioGroup>
      </FormControl>
      <br></br>
    <br></br>
    <br></br>
   <a href='#'>SignUp As A Doctor</a>
   <br></br>
    <br></br>
    <br></br>

    <Button variant="contained" color="primary"  className= {classes.menu} onClick={sending}>
   SignUP
  </Button>
    
    
    </div>
    
  

  );
}

export default Signuppatient;
