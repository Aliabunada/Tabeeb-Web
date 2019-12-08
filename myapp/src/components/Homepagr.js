import React from 'react';
// import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import  { useState ,useEffect} from 'react';
import axios from 'axios';


export default function HomePage() {


   const [datas,setDatas] = useState([]);

    useEffect(() => { 
      
      axios.get('/gettingdata')
      .then(({ data }) => {
        setDatas(data);
        console.log(data)
          console.log("success recive!!!",data)
        });
    

           

  })
 
       console.log(datas);
    
return (

    <div>
 <AppBar
      position="static" style={{marginTop:35,marginBottom:50}}>
          
        <Toolbar
      
         >
          <IconButton
            edge="start"
            // className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            
          </IconButton>
          <Typography  variant="h3" noWrap>
          Tabeeb Web
          </Typography>
          </Toolbar>
          </AppBar>

        {/* <CardMedia
    // className={classes.media}
    // image="/static/images/cards/contemplative-reptile.jpg"
    title="profile picture"
    style={{marginRight:10}}
  /> */}
  {datas.map(data => (
    // <h1 key={data._id}>{data.firstname}</h1>

  // ))}
  <div key={data._id}>   
    
     <Typography   component="h2" variant="h5">
  Name :  {data.firstname} 
  </Typography>
<br></br>
<Typography component="h4" variant="h5">
  specialization :  
  </Typography>
  <br></br>
<Typography  key={data._id} component="h4" variant="h5">
  Mobilenumbew : {data.mobile}
  </Typography>
  <br></br>
  <Typography component="h4" variant="h5">
  Working Days :  
  </Typography>
  <br></br>
  
  <Typography  key={data._id} component="h4" variant="h5">
  Email :  {data.email} 
  </Typography>

  <br></br>
  <br></br>
  <Button variant="contained"   >
  Appoinments
  </Button>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  </div>
   


        ))}
       
      
    </div>


)
}