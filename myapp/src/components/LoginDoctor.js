import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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
      console.log("success send!!!")},
    error: (err) => {
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
          
        </form>
      </div>
      <Box mt={8}>
      
      </Box>
    </Container>
  );
}export default SignIndoctor