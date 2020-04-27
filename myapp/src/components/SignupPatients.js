import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import { RadioGroup } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import Radio from '@material-ui/core/Radio';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {  Link } from 'react-router-dom';

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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


function Signuppatient() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    firstName: '',
    lastName: '',
    password: '',
    mobilenum: '',
    Email:'',
    Address : '',
    Gender : '',
  });
  function sending(event){
    event.preventDefault();
 
  // console.log(values)
  $.ajax({
    url: '/patientregister', 
    type : "post",
    data : values , 
    dataType : 'json',
    success: (data) => {
      
      // console.log("success send!!!")
      window.location.replace('/')
    
      
    // profile();
  },
    error: (err) => {
      alert("The Password is less than 6 letters Try again")
      console.log('err', err);
    }
  });
  }

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value)
  };


  return (
   
    <Container component="main" maxWidth="xs" > 

    <CssBaseline />

    <div className={classes.paper} style={{alignItems:'center' }} >
     
      <Typography component="h1" variant="h5">
      Sign Up As Patient
        </Typography>

        <form className={classes.form} noValidate>
  
  <TextField id="firstname" label="First Name"    variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
             onChange={handleChange('firstName')}  />
 
  <TextField id="lasttname" label="Last Name"    variant="outlined"
            margin="normal"
            required
            fullWidth
          
             onChange={handleChange('lastName')}  />
  
    
    <TextField  
   margin="normal"
   required
   fullWidth
 
      variant="outlined" 
      type = 'password' 
      id='password' 
      label='Password'
      onChange={handleChange('password')} 
      ></TextField>

 
    <TextField  margin="normal"
            required
            fullWidth
           id="mobilenum" label="Mobile num" variant="outlined"   onChange={handleChange('mobilenum')}  />
  
    <TextField  margin="normal"
            required
            fullWidth
            id="email" label="Email" variant="outlined"  onChange={handleChange('Email')}/>

  
  <div>
  <TextField
          id="add"
          select
          label="Choose Your Address"
          margin="normal"
          required
          fullWidth
       
          // value={currency}
          onChange={handleChange('Address')}
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
            <MenuItem key={option.value} id="add" value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        </div>
  
    <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" id = "gender" onChange={handleChange('Gender')}>
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
         
          
        </RadioGroup>
      </FormControl>
      <br></br>
    <br></br>
    <br></br>
    <Link to="/signupdoctor">SignUp As A Doctor</Link>
   <br></br>
    <br></br>
    <br></br>

    <Button variant="contained" color="primary"   margin="normal"
            required
            fullWidth
             onClick={sending}>
   SignUP
  </Button>
    
     </form>
    </div>
    
    </Container>
  
   
  

  );
}

export default Signuppatient;
