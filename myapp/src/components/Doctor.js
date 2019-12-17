import React from 'react';
import {Inject,ScheduleComponent , Day ,Week , WorkWeek , Month,Agenda,ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule'

import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import  { useState, useEffect } from "react";
import axios from 'axios';
import $ from 'jquery'; 
export default function Doctor() {
    const [datas, setDatas] = useState([]);
    const [appoints , setAppoints]= useState([]);
    console.log(localStorage.getItem('em'),"success send!!!");
    var emailuser = localStorage.getItem('em')
    // localStorage.clear();
useEffect(() => {
      axios.get('/getinfodoc/'+emailuser) 
            .then(({ data }) =>{
            setDatas(data);
          })  
          
       
          
      },[]);
     
        console.log('data',datas._id);

function Appoinment(e) {
  e.preventDefault();

axios.get('/appoinmentfordoctor/'+ datas._id)
.then(({ data }) =>{
  setAppoints(data)
  console.log(data)
   
   console.log('Appointment',appoints);


})


// $.ajax({
//   url: `/appoinmentfordoctor/${datas._id}`, 
  
//   type : "GET",
//   dataType : 'json',
  
//   success: (data) => {
//     console.log(data,'ddd')
//     setAppoints(data);
 
//     //  console.log(this.state.datafromdb,'////////hhhhhh')
//     console.log("success !!!",appoints);
   
//   },
//   error: (err) => {


//     // alert('the email or password is wrong');
//     console.log('err', err);
//   }
// });
}
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
        <br></br>
        <br></br>
        <br></br>
        <Button
            type="submit"
            // fullWidth
            variant="contained"
            color="primary"
            // className={classes.submit}
            onClick={Appoinment}
          >
          Table for Appoinments
          </Button>
          <br></br>
        <br></br>
        <br></br> <br></br>
        <br></br>
        <br></br>
       
        <div>
        {appoints.length?<ScheduleComponent currentView='Month' width='100%' height='550px' selectedDate={new Date()} eventSettings={{  dataSource: appoints,}} readonly={true} startHour='8:00' endHour='15:00'>
           <ViewsDirective > 
  <ViewDirective option = 'month' ></ViewDirective>
  <ViewDirective option = 'week' ></ViewDirective>
 <ViewDirective option = 'Day' startHour='8:00' endHour='15:00' ></ViewDirective>
 <ViewDirective option = 'TimelineDay'></ViewDirective>
 <ViewDirective option = 'TimelineMonth'></ViewDirective>
 </ViewsDirective>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      <br></br>
    
    
      
    </ScheduleComponent>
        :<div>
       <h1>click to see appoinments</h1>
      </div>}
      
       
{/* </div> */}
    </div>
  
    </div>



    );
}