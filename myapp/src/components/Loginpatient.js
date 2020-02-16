import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {  Link } from 'react-router-dom'
import $ from "jquery";


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
function sending(event){
  event.preventDefault();

  var takesenddata ={
    email:$('#email').val(),
    password:$('#password').val()
  }
  // console.log(takesenddata)
  $.ajax({
    url: '/loginpatient', 
    type : "post",
    data : takesenddata , 
    dataType : 'json',
    success: (data) => {
 
      // console.log("success send!!!")
      localStorage.setItem('emp',takesenddata.email)
      // console.log(localStorage.getItem('emp'),"success send!!!");
          window.open('/Homepage')
    },
    error: (err) => {
      alert('the email or password is wrong');
      console.log('err', err);
    }
  });
}

 function SignInpatient() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
     
        <Typography component="h1" variant="h5">
         Wellcome Patient Sign in  
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
               <br></br>
          <br></br>
          <Link to="/SignIndoctor">Login As A Doctor </Link>
         
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
          <Link to="/signuppatient">Signup As Patient</Link>
         
       
        </form>
      </div>
      <Box mt={8}>
      
      </Box>
    </Container>
  );
}
export default SignInpatient;
