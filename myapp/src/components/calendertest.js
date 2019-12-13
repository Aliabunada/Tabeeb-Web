// import React ,{Component}from 'react';
// // import {ScheduleComponent}from '@syncfusion/ej2-react-schedule';
// import {Inject,ScheduleComponent , Day ,Week , WorkWeek ,Resize, Month,Agenda,EventSettingsModel ,ViewDirective, ViewsDirective,TimelineViews,TimelineMonth,DragAndDrop } from '@syncfusion/ej2-react-schedule'
// import $ from 'jquery';
// import  { useState ,useEffect} from 'react';
// import {DataManager,WebApiAdaptor} from '@syncfusion/ej2-data'
// import {DayPilotScheduler} from "daypilot-pro-react";
// // import DropDownListComponent from '@syncfusion/ej2-react-dropdowns'
// import DateTimePickerComponent from '@syncfusion/ej2-react-calendars'
// import axios from 'axios';
// import { object } from 'prop-types';
// class c extends React.Component{
//     // export default  function c (){
//     //     const [dataa,setDataas] = useState([]);

//     //      [newapp, setNewapp] =useState({
//     //   Patientemail:'',
//     //   Doctoremail :'',
//     //   Subject: '',
//     //   StartTime:'',
//     //   EndTime: '',
//     //         });
     

     

//     //     useEffect(() => { 

//     //           axios.get('/getappoinments')
//     //         .then(({ data }) => {
//     //            setDataas(data); 
//     //                  });
//     //              },[])
      
    
//  localData : EventSettingsModel = [{
// //   localData= [{
//             Id:1,
//             StartTime :new Date(2019,11,20,9),
//             EndTime :new Date(2019,11,20,12),
//             Subject:'Abd', 
//             IsReadonly : false,
//             DragAndDrop :true
//         },
//        {
//         Id:2,
//         StartTime:new Date(2019,11,21,12),
//         EndTime:new Date(2019,11,21,9),
//         Subject:'Rayan', 
//         IsReadonly : false,

      
//          }] 
      
//         // const mapAppointmentData = appointment => ({
//         //     ...appointment,
//         //     startDate: appointment.StartDate,
//         //     endDate: appointment.EndDate,
//         //     title: appointment.Text,
//         //   });
//         // const formattedData = dataa? dataa.map(mapAppointmentData) : [];

//         eventTemplate (props){
// console.log(props.Subject);
//             return(
//                 <div className = 'template-wrap'>{props.Subject}</div>
//             )
//         }
//      render(){   
// return (
    
//     <ScheduleComponent  onEventMoved= { args => {console.log("Event moved: ", args.e.data.id, args.newStart, args.newEnd, args.newResource);
//       }}

//      currentView='Month'
//       selectedDate={new Date()}
//        eventSettings={{dataSource:this.localData , template:console.log(this) }} 
//        allowDragAndDrop={!false}
     

//        >
// {/* <ViewsDirective >
// <ViewDirective option = 'month' ></ViewDirective>
// <ViewDirective option = 'Day' startHour='8:00' endHour='15:00' interval={3}></ViewDirective>
// <ViewDirective option = 'TimelineDay'></ViewDirective>
// <ViewDirective option = 'TimelineMonth'></ViewDirective>
// </ViewsDirective> */}


// <Inject services ={[ Day ,Week , WorkWeek , Month,Agenda,TimelineMonth,TimelineViews,DragAndDrop]}></Inject>
//     </ScheduleComponent>
// )
// }
// }
// export default c;

import  React from 'react';
import  ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, Inject } from '@syncfusion/ej2-react-schedule';
// import { webinarData } from './datasource';
import { Internationalization, extend } from '@syncfusion/ej2-base';
import { Button } from '@material-ui/core';
import $ from 'jquery'
class c extends React.Component {
    constructor() {
        super(...arguments);
        this.state={
            EndTime : '',
            Guid :  '',
            Id: '',
            Index : '',
            IsReadonly : false,
            StartTime : '',
            Subject : '',
            Patientemai:''
        }
        this.arr = []

        // this.data = extend([], webinarData, null, true);
        this.instance = new Internationalization();
       this.localData= [
        //    {
        //                 Id:1,
        //                 StartTime :new Date(2019,11,20,9),
        //                 EndTime :new Date(2019,11,20,12),
        //                 Subject:'Abd', 
        //                 IsReadonly : true,
        //                 DragAndDrop :true
        //             },
                   {
                    Id:2,
                    StartTime:new Date(2019,11,22,12),
                    EndTime:new Date(2019,11,22,9),
                    Subject:'Rayan', 
                    IsReadonly : true,
            
                  
                     }] 
    }

 
    





    getTimeString(value) {
        return this.instance.formatDate(value, { skeleton: 'hm' });
    }
    eventTemplate(props) {
        console.log(props,'///')
      

    var newAppoin = props
    this.state.EndTime = newAppoin.EndTime;
    this.state.Guid  =newAppoin.Guid;
   this.state.Index = newAppoin.Index;
   this.state.Id= newAppoin.Id;
    this.state.IsReadonly = !newAppoin.IsReadonly;
    this.state.StartTime = newAppoin.StartTime;
    this.state.Subject = newAppoin.Subject;

        return (<div className="template-wrap" style={{ background: props.SecondaryColor }}>
    <div className="subject" style={{ background: props.PrimaryColor }}>{props.Subject}</div>
    <div className="time" style={{ background: props.PrimaryColor }}>
    Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}</div>
   </div>);
 


    }
    render() {
        return (
            <div>
        <div> <ScheduleComponent currentView='Month' width='100%' height='550px' selectedDate={new Date()} eventSettings={{   dataSource: this.localData, template: this.eventTemplate.bind(this)
        }} readonly={!true}>
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
      <br></br>
      <br></br>
      <br></br>
    
      
    </ScheduleComponent></div>
    <br></br>
      <br></br>
      <br></br>
    
    <div> <Button type="submit"
    fullWidth
    variant="contained"
    color="primary"
    style={{width:160}}
    onClick={this.SendAndSave.bind(this)}
    >Submit
    </Button>
    
    </div>

     </div>
        );
    }
        
    SendAndSave(){
        console.log(this.state , 'this is the state')
        
        $.ajax({
            url: '/getappoinments', 
            type : "post",
            data : this.state , 
            dataType : 'json',
            success: (data) => {
              console.log(this.state.Subject,'//subject')
              console.log("success send!!!");
            },
            error: (err) => {
             
              console.log('err', err);
            }
          });
        }
               
}
;
// ReactDOM.render(<c />, document.getElementById('schedule'));
export default c;

