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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import IconButton from '@material-ui/core/IconButton';
import $ from "jquery";
import  { useState } from 'react';
// import Doctor from './Doctor'
// import {
//   BrowserRouter ,
//   Switch,
//   Route,
  
// } from "react-router-dom";
// import Doctor from './Doctor'
// function profile(){
//   return(
//   <Switch>
//   <Route path="/DoctorProfile">
//       <Doctor />
//     </Route>
//   </Switch>
//   );
// }
const specialization = [
{
  value :'ANESTHESIOLOGY',
  label :'ANESTHESIOLOGY'
},{
  value :'ALLERGY & IMMUNOLOGY',
  label :'ALLERGY & IMMUNOLOGY'
},{
  value :'DERMATOLOGY',
  label :'DERMATOLOGY'
},{
  value :'DIAGNOSTIC RADIOLOGY',
  label :'DIAGNOSTIC RADIOLOGY'
},{
  value :' FAMILY MEDICINE',
  label :' FAMILY MEDICINE'
},{
  value :'INTERNAL MEDICINE',
  label :'INTERNAL MEDICINE'
},{
  value :'PEDIATRICS',
  label :'PEDIATRICS'
},{
  value :'PATHOLOGY',
  label :'PATHOLOGY'
},
{
  value :'SURGERY',
  label :'SURGERY'
},
]
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
    width: 260,
  },
  menu: {
    width: 260,
  },
}));


function Signupdoctor() {
  
  const classes = useStyles();
  // const [currency, setCurrency] = useState("Gaza");
  // const [value, setValue] =useState('male');
  const [values, setValues] =useState({

    firstName: '',
    lastName: '',
    password: '',
    mobilenum: '',
    Email:'',
    Address : '',
    gender : '',
    specialization : '',
    shortbrief:'',
    // image:'',
   workingdays:''

  });
  
// var a = values;
function sending(event){
  event.preventDefault();

  console.log(values)
  $.ajax({
    url: '/doctorregister', 
    type : 'post',
    data :values , 
    dataType : 'json',
    success: (data) => {
      console.log("success send!!!")}, 
    error: (err) => {
      alert("FAILD")
      console.log('err', err);
    }
  });
}
  // const handleChangess = event => {
  //   setValue(event.target.value);
  // };
  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
    // console.log(event.target.value,'this is the value in handle change')
  };
  // const handleChanges = event => {
  //   setCurrency(event.target.value);
  //   setValues(event.target.value)
  // };


  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };
  // const theme = {
  //   spacing: value => value ** 2,
  // }

  return (
   
    
  
    <div style={{padding:25,alignItems:'center' }} >
      <h1 style={{marginBottom:54,marginTop:30}}> SignUP As Doctor</h1>
     
    
  
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
    <br></br>
    <TextareaAutosize aria-label="minimum height" rows={4} placeholder="Short Brief" className= {classes.menu} id="shortbrief"  variant="outlined"  onChange={handleChange('shortbrief')}/>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


  <div>
        <TextField
          id="specialization"
          select
          label="Choose Your specialization"
          className={classes.textField}
          // value={currency}
          onChange={handleChange('specialization')}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          helperText="Please select your specialization"
          margin="normal"
          variant="outlined"
        >

          {specialization.map(option => (
            <MenuItem key={option.value} id="specializations" value={option.value} >
              {option.label}
            </MenuItem>
          ))}
        </TextField>

<br></br>
<br></br>
<br></br>
<br></br>
        </div>
 
    <br></br>
    <br></br>
    <FormControl component="fieldset" >
        <FormLabel component="legend">Working Days</FormLabel>
        <RadioGroup aria-label="Working Days" onChange={handleChange('workingdays')} name="workingdays" id ="WorkingDayss" >
        <FormControlLabel value="Saterday,Monday,Wednesday" control={<Radio />}  label="Saterday , Monday , Wednesday" />
    <FormControlLabel value="Sunday,Tuesday,Theresday" control={<Radio />}   label="Sunday , Tuesday , Theresday" />
    
        </RadioGroup>
      </FormControl>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <input variant="outlined"
                    accept="image/*"
                    // className={classes.input}
                    // id="icon-button-photo"
                    // onChange={handleChange('image')}
                    type="file"
                />
                <label htmlFor="icon-button-photo">
                    <IconButton color="primary" component="span" label="Choose image">
                       
                    </IconButton>
                </label>
                <br></br>
    <br></br>

<br></br>
<br></br>
  <div>
        <TextField
          id="add"
          select
          label="Choose Your Address"
          className={classes.textField}
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

  <br></br>
    <br></br>
    <FormControl component="fieldset" >
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup aria-label="gender" name="gender" onChange={handleChange('gender')} id ="genderss" defaultValue="other">
        <FormControlLabel value="female" control={<Radio />}  label="Female" />

    <FormControlLabel value="male" control={<Radio />}   label="Male" />
    <FormControlLabel value="other" control={<Radio />}   label="Other" />
        </RadioGroup>
      </FormControl>
      
      <br></br>
    <br></br>
    <br></br>
   {/* <a href='#'>SignUp As A Doctor</a> */}
   <br></br>
    <br></br>
    <br></br>
    <a href='http://localhost:3002/signuppatient'>SignUp As A Patient</a>

    <Button variant="contained" color="primary"  className= {classes.menu} onClick={sending} >
   SignUP
  </Button>
    
    
    </div>
    
  

  );
}

export default Signupdoctor;
