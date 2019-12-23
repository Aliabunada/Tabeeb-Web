import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import $ from "jquery";
import {  Link } from 'react-router-dom';

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
    width: '100%', 
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
function sending(event){
  localStorage.removeItem('em');
  event.preventDefault();

  var takesenddata ={
    email:$('#emaillogin').val(),
    password:$('#passwordlogin').val()

  }
  console.log(takesenddata)
  $.ajax({
    url: '/logindoctor', 
    type : "post",
    data : takesenddata , 
    dataType : 'json',
    success: (data) => {
      console.log(takesenddata.email)
      localStorage.setItem('em',takesenddata.email)
      console.log(localStorage.getItem('em'),"success send!!!");
        // window.open('/doctorprofile')
        window.open('/doctorprofile')
      // return <Redirect to="/Doctor" />;
      // console.log("success send!!!");
     
    },
    error: (err) => {
      alert('the email or password is wrong');
      console.log('err', err);
    }
  });
}



function SignIndoctor() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
     
        <Typography component="h1" variant="h5">
         Wellcome Doctor Sign in  
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            id="emaillogin"
            required
            fullWidth
           
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            id="passwordlogin"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
         
            autoComplete="current-password"
          />
           <br></br>
         <br></br>
         <Link to="/">Login As A Patient</Link>
         {/* <a href='/'>Login As A Patient</a> */}
         <br></br>
         <br></br>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={sending}
          >
            Sign In
          </Button>

          <br></br>
         <br></br>
         <Link to="/signupdoctor">Signup  As A Doctor</Link>
          {/* <a href='/signupdoctor'>Signup  As A Doctor</a> */}
        
        </form>
   
      </div>
      <Box mt={8}>
      
      </Box>
    </Container>
  );
}export default SignIndoctor