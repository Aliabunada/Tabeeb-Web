import React from 'react';
import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda, ViewDirective, ViewsDirective } from '@syncfusion/ej2-react-schedule'
import { Internationalization, extend } from '@syncfusion/ej2-base';
import { Button } from '@material-ui/core';
import $ from 'jquery';

class c extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      EndTime: '',
      Guid: '',
      Id: '',
      Index: '',
      IsReadonly: false,
      StartTime: '',
      Subject: '',
      Patientemai: '',
      doctorid: '',
      datafromdb: []
    }
    this.arr = []


    this.instance = new Internationalization();
  }

  onEventRendered(args) {
    if (args.data.EndTime < this.scheduleObj.selectedDate) {
      args.element.classList.add('e-past-app');
    }
  }

  getTimeString(value) {
    return this.instance.formatDate(value, { skeleton: 'hm' });
  }
  eventTemplate(props) {



    var newAppoin = props
    this.state.EndTime = newAppoin.EndTime;
    this.state.Guid = newAppoin.Guid;
    this.state.Index = newAppoin.Index;
    this.state.Id = newAppoin.Id;
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
  UNSAFE_componentWillMount() {


    this.setState({ Patientemai: localStorage.getItem('emp') });
    const query = new URLSearchParams(this.props.location.search);
    const id = query.get('id')

    this.setState({ doctorid: id });

    $.ajax({
      url: `/appoinment/${id}`,

      type: "GET",
      dataType: 'json',

      success: (data) => {

        this.setState({ datafromdb: data });


      },
      error: (err) => {


        console.log('err', err);
      }
    });

  }
  componentDidMount() {



  }

  render() {
    return (
      <div>
        <div>
          {this.state.datafromdb ?
            <ScheduleComponent currentView='Week' width='100%' height='550px' selectedDate={new Date()} eventSettings={{ dataSource: this.state.datafromdb, template: this.eventTemplate.bind(this) }} readonly={!true} startHour='8:00' endHour='15:00' isAllDay={false} >

              <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
              <br></br>



            </ScheduleComponent>
            : <div>
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
          style={{ width: 160 }}
          onClick={this.SendAndSave.bind(this)}
        >Submit
    </Button>

        </div>

      </div>
    );
  }

  SendAndSave() {


    $.ajax({
      url: '/getappoinments',
      type: "post",
      data: this.state,
      dataType: 'json',
      success: (data) => {

        console.log("");
      },
      error: (err) => {

        console.log('err', err);
      }
    });
  }

}

export default c;

