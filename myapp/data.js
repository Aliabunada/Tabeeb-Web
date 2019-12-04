const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = "mongodb+srv://Ali:ali@webteb-8zitg.mongodb.net/Webteb?retryWrites=true&w=majority"
mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}); //, useMongoClient: true

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("We're Connected to database!");
});

///____________________________ patient ______________________

const patientschema = Schema({ //patient description schema
  firstname:{type: String,
        required: true},
  lastname:{type: String,
        required: true}, 
  password:{type:String,
        required: true},
  email:{type:String,
        required: true, unique: true,
        lowercase: true},
  mobile:{type:String,
        required: true},
  gender: {type: String,
  },
  address: {type: String,
   }

})

const Userpatient = mongoose.model('Userpatient', patientschema);
// var patienttest = new Userpatient({
//    firstname:'xyz',
//    lastname:'opq',
//    password:'111',
//    email:'al@gmail.com',
//    mobile:'0011',
//    address:'Khalda' ,
//    gender :' male '
// })
// patienttest.save();



// let savepatient = (patient) => {  
//   var newparient = new Userpatient({
//     firstname:patient.firstname,
//     lastname:patient.lastname,
//     password:patient.password,
//     mobile:patient.mobile,
//     email:patient.email,
//     gender:patient.gender,
//     address:patient.address
//   })
//   newparient.save();
// }


///____________________________Doctor ______________________




const doctorschema = Schema({ //Doctor description schema
    firstname:{type: String},
    lastname:{type: String}, 
    password:{type:String},
    email:{type:String},
    mobile:{type:String},
    gender: {type: String},
    address:{type: String},
    img :{type: String},
    specialization:{type: String},
    smallbrief:{type: String}
  })
  
  const Userdoctor = mongoose.model('Userdoctor', doctorschema);
  
  let savedoctor = (doctor) => {  
    var newdoctor = new Userdoctor({
      firstname:doctor.firstname,
  lastname:doctor.lastname,
  password:doctor.password,
  email:doctor.email,
  mobile:doctor.mobile,
  gender:doctor.gender,
  address:doctor.address,
  img :doctor.img,
  specialization:doctor.specialization,
  smallbrief:doctor.smallbrief,
  dayone:doctor.dayone,
  daytwo:doctor.daytwo,
  daythree:doctor.daythree
    })
    newdoctor.save();
  }
//   var newdoctor = new Userdoctor({
//     firstname:'xyz',
//     lastname:'opq',
//     password:'111',
//     email:'ali@gmail.com',
//     mobile:'0011',
//     address:'Khalda' ,
//     gender :' male ',
//     img :"doctor.img",
//   specialization:"doctor.specialization",
//   smallbrief:"doctor.smallbrief"
//  })
//  newdoctor.save();

/////--------------------------------//----------------------------------------


module.exports={Userdoctor, Userpatient};