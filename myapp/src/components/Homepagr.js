import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';
import {  Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  shadow:{
    boxShadow: '10px 10px 5px 0px rgba(0,0,0,0.75)'
  }
 
}));
export default function HomePage() {
  // console.log(localStorage.getItem('emp'), "success send!!!");
  var emailuser = localStorage.getItem('emp')
  const classes = useStyles();
  const [datas, setDatas] = useState([]);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    axios.get('/gettingdata')
      .then(({ data }) => {
        setDatas(data);

      });
  }, [])


  return (
    
    <div style={{ position: 'center' }}>
      {datas.map((data, i = 0) => (
        <Grid container spacing={6} justify="center" alignItems="center"  >
          <Grid item xs={8} style={{ textAlign: "center" }} >
            <Paper className={classes.shadow}>

              <div key={i++} style={{ border: '1px solid black', textAlign: "center" }} boxShadow={11}>
                <br></br>
                <br></br>

                <Typography component="h2" variant="h5">

                  Name :Dr. {data.firstname}    {data.lastname}
                </Typography>
                <br></br>
                <br></br>
                <Typography key={data._id} component="h4" variant="h5">

                  Mobile Number : {data.mobile}
                </Typography>
                <br></br>
                <br></br>
                <Typography key={data._id} component="h4" variant="h5">

                  Email :  {data.email}
                </Typography>
                <br></br>
                <br></br>
                <Typography component="h4" variant="h5">

                  Specialization : {data.specialize}
                </Typography>
                <br></br>
                <br></br>
                <br></br>
               

                <Link to={`/calender/?id=${data._id}`}>
                <Button variant="contained" color="primary"  >

Add Appoinments
</Button> 
                </Link>

                <br></br>
                <br></br>
                <br></br>

              </div>
            </Paper>
          </Grid>
        </Grid>
      ))}
      <br></br>
      <br></br>
    </div>
  )
}
