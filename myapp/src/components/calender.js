import React ,{Component}from 'react';
import '../App.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";



export default class EventCalender extends Component  {
// console.log('ggg')
    render(){
        return(
            <div style={{height:1000 ,width:1000}}>
                <FullCalendar  
            defaultView="dayGridMonth"
           plugins={[dayGridPlugin]}
           events={[
            { title: 'event 1', date: '2019-12-12' },
            { title: 'event 2', date: '2019-04-02' }
          ]}
          />
</div>
            // <h1>sad</h1> 
           
         )
    }
}











//-------------------------Google calendere Api-------------------
// import  { useState ,useEffect} from 'react';
// class App extends React.Component 0{
//     constructor(props) {
//       super(props)
//       this.state = {
//         events: []
//       }
//     }
//     componentDidMount = () => {
//         this.getEvents();
//       }
    
//         return(
//           {this.state.events.map(function(event){
//             return(
              
//                 {event.summary} {event.start.dateTime} - {event.end.dateTime}
              
//             )
//           });
//         )
//       }
    
//   }
// function getEvents() { 
//     let that = this;
//     function start() {
//       gapi.client.init({
//         'apiKey': GOOGLE_API_KEY
//       }).then(function() {
//         return gapi.client.request({
//           'path': `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events`,
//         })
//       }).then( (response) => {
//         let events = response.result.items
//         that.setState({
//           events
//         }, ()=>{
//           console.log(that.state.events);
//         })
//       }, function(reason) {
//         console.log(reason);
//       });
//     }
//     gapi.load('client', start)
//   };

