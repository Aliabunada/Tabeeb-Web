import React from 'react';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import  { useState ,useEffect} from 'react';
import axios from 'axios';

  import EventCalender from './calender';
  import c from './calendertest'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

export default function HomePage() {
  console.log(localStorage.getItem('emp'),"success send!!!");
  var emailuser = localStorage.getItem('emp')

   const [datas,setDatas] = useState([]);
  

    useEffect(() => { 
      
      axios.get('/gettingdata')
      .then(({ data }) => {
        setDatas(data);
     
        
        console.log(data)
          console.log("success recive!!!",data)
        });
    

      //  console.log(datas,'asd',spec,'as',wday,'a')

  },[])
//   var newspec =[];
//  function connecting (datas,spec,wday)  {
   
//     for(var i = 0 ; i < datas.length ; i++){
      
//     for(var j = 0 ; j < spec.length ; i++){
//       if(spec[j].Doctor === datas[i]._id){
//         newspec.push(spec[j])
//       }
//     }
//     }
// console.log(newspec,'New spec')
//   }
  
 
      //  console.log(datas);
    
return (

    <div >
 

        {/* <CardMedia
    // className={classes.media}
    // image="/static/images/cards/contemplative-reptile.jpg"
    title="profile picture"
    style={{marginRight:10}}
  /> */}
 
  {datas.map((data,i=0) => ( 
   
  <div key={i++} style={{border:'1px solid black'}}>   
     <br></br>
  <br></br>
  
     <Typography   component="h2" variant="h5">

  Name :Dr. {data.firstname}    {data.lastname} 
  </Typography>
<br></br>
<br></br>
<Typography  key={data._id} component="h4" variant="h5">

  Mobile Number : {data.mobile}
  </Typography>
<br></br>
 <br></br>
 <Typography  key={data._id} component="h4" variant="h5">

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
  <a href={`/calender/?id=${data._id}`}style={{ color: 'green' }} >
  <Button  variant="contained" style={{ background: '#269900' }}   >

  Add Appoinments
  </Button>
  </a>

  <br></br>
  <br></br>
  <br></br>
  <br></br>
   </div>
   


        ))} 
       
       <br></br>
  <br></br>
  <br></br>
  <br></br>
    </div>


)
}
function a (i){
  console.log('aaaaaaaa');
  console.log(i,'////////')
//  return(
// //  <div>
// //    <Switch>

// //    <Route path="/calender"  component={c}></Route>
// //  </Switch>
// //  </div>
//   ) 
}