import React ,{Component}from 'react';
// import {ScheduleComponent}from '@syncfusion/ej2-react-schedule';
import {Inject,ScheduleComponent , Day ,Week , WorkWeek , Month,Agenda,EventSettingsModel} from '@syncfusion/ej2-react-schedule'

class c extends React.Component{
  render(){
return (
    <ScheduleComponent currentView='Month'>
<Inject services ={[ Day ,Week , WorkWeek , Month,Agenda]}></Inject>
    </ScheduleComponent>
)
    }
}
export default c;