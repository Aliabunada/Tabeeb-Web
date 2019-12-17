import  React from 'react';
import {Inject,ScheduleComponent , Day ,Week , WorkWeek , Month,Agenda,ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule'
import { Internationalization, extend } from '@syncfusion/ej2-base';
import { Button } from '@material-ui/core';
import $ from 'jquery';
import  * as dataSource from './datasource.json';
// import { extend } from '@syncfusion/ej2-base';
// import axios from 'axios';
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
            Patientemai:'',
            doctorid:'',
            datafromdb:[]
        }
        this.arr = []

         this.dataaaa = extend([], dataSource.scheduleData, null, true);
        this.instance = new Internationalization();
    }



    getTimeString(value) {
        return this.instance.formatDate(value, { skeleton: 'hm' });
    }
    eventTemplate(props) {
        console.log(props,'/// this is the new appoinment')
      

    var newAppoin = props
    this.state.EndTime = newAppoin.EndTime;
    this.state.Guid  =newAppoin.Guid;
   this.state.Index = newAppoin.Index;
   this.state.Id= newAppoin.Id;
    this.state.IsReadonly = !newAppoin.IsReadonly;
    this.state.StartTime = newAppoin.StartTime;
    this.state.Subject = newAppoin.Subject;

        return (
                <div className="template-wrap" style={{ background: props.SecondaryColor }}>
    <div className="subject" style={{ background: props.PrimaryColor }}>{props.Subject}</div>
    <div className="time" style={{ background: props.PrimaryColor }}>
    Time: {this.getTimeString(props.StartTime)} - {this.getTimeString(props.EndTime)}</div>
   </div>
   );
     }
     UNSAFE_componentWillMount(){
       console.log('Willmount')
      console.log(localStorage.getItem('emp'),"success !!!");
      this.setState({Patientemai:localStorage.getItem('emp')});
      const query = new URLSearchParams(this.props.location.search);
      const id = query.get('id')
      // console.log(id)
      this.setState({doctorid:id});
      console.log(this.state.doctorid)
        $.ajax({
        url: `/appoinment/${id}`, 
        
        type : "GET",
        dataType : 'json',
        
        success: (data) => {
          console.log(data.length,'ddd')
          this.setState({datafromdb:data});
       
           console.log(this.state.datafromdb,'////////hhhhhh')
          console.log("success send!!!");
         
        },
        error: (err) => {


          // alert('the email or password is wrong');
          console.log('err', err);
        }
      });
    
  }
    componentDidMount(){
      
    
      
    }

    render() {
        return (
            <div>
        <div> 
          {this.state.datafromdb?
          <ScheduleComponent currentView='Month' width='100%' height='550px' selectedDate={new Date()} eventSettings={{   dataSource: this.state.datafromdb, template: this.eventTemplate.bind(this)
        }} readonly={!true} startHour='8:00' endHour='15:00'>
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
      kjkjikj
    </div>}
    </div>
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
              // console.log(this.state.Subject,'//subject')
              console.log("success send!!!");
            },
            error: (err) => {
             
              console.log('err', err);
            }
          });
        }
               
}

export default c;

