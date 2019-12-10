import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  { useState, useEffect } from "react";
import axios from 'axios';

export default function Doctor() {
    const [datas, setDatas] = useState([]);
    console.log(localStorage.getItem('em'),"success send!!!");
    var emailuser = localStorage.getItem('em')
    localStorage.clear();
useEffect(() => {
      axios.get('/getinfodoc/'+emailuser) 
            .then(({ data }) =>{
            setDatas(data);
          })   
      },[]);
        console.log('data',datas);

    return (
    <div>
 
{/* <CardMedia
    // className={classes.media}
    // image="/static/images/cards/contemplative-reptile.jpg"
    title="profile picture"
    style={{marginRight:20}}
  /> */}
  {/* {datas.map(data => (
    <h1 key={data._id}>{data.firstname}</h1>

  ))} */}
  
    <Typography component="h2" variant="h5">
        Name :  {datas.firstname}       {datas.lastname}
        </Typography>
<br></br>
<Typography component="h4" variant="h5">
        specialization :  {datas.specialize} 
        </Typography>
        <br></br>
<Typography component="h4" variant="h5">
        Mobilenumbew :  {datas.mobile} 
        </Typography>
        <br></br>
        <Typography component="h4" variant="h5">
        Working Days :   {datas.Workingdays} 
        </Typography>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
<div>
<Typography component="h4" variant="h5">
        Table for Appoinments :  
        </Typography>
        <div>
        <Paper >
      <Table  aria-label="customized table">
        <TableHead>
          <TableRow>
            {/* <StyledTableCell>Dessert </StyledTableCell>
        
            <StyledTableCell align="right">dataType</StyledTableCell>
            <StyledTableCell align="right">Patient </StyledTableCell> */}
           
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {rows.map(row => (
            // <StyledTableRow key>
            //   <StyledTableCell component="th" scope="row">
                
            //   </StyledTableCell>
            //   <StyledTableCell align="right"></StyledTableCell>
            //   <StyledTableCell align="right"></StyledTableCell>
            //   <StyledTableCell align="right"></StyledTableCell>
            //   <StyledTableCell align="right"></StyledTableCell>
            // </StyledTableRow>
          ))} */}
        </TableBody>
      </Table>
    </Paper>

        </div>
</div>
    </div>
  




    );
}