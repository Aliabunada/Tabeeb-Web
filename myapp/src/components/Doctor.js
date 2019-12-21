import React from 'react';
import {Inject,ScheduleComponent , Day ,Week , WorkWeek , Month,Agenda,ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule'

import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import  { useState, useEffect } from "react";
import axios from 'axios';

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


}
    return (
    <div>
 

  
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
            
            variant="contained"
            color="primary"
           
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
      
       

    </div>
  
    </div>



    );
}