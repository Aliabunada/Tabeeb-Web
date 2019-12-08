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
      id:{type:Number , unique:true},
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


const Appoinments = Schema({
      id:{type:Number , unique:true},
      Patient:{type: Schema.Types.ObjectId, ref: 'Userpatient'},
      Doctor :{type: Schema.Types.ObjectId, ref: 'Userdoctor'},
      Appoinmentdate: {type: Date}
})
const Appoinmentsmodel = mongoose.model('Appoinmentsmodel', Appoinments);

const Specialization = Schema({
      id:{type:Number , unique:true},
      Doctor :{type: Schema.Types.ObjectId, ref: 'Userdoctor'},
      specialize: {type: String}

})
const Specializationmodel = mongoose.model('Specializationmodel', Specialization);

const Workingdays = Schema({
       id:{type:Number , unique:true},
      Doctor :{type: Schema.Types.ObjectId, ref: 'Userdoctor'},
      Workingdays: {type: String}
})
const Workingdaysmodel = mongoose.model('Workingdaysmodel', Workingdays);

// const Auth = Schema({ //schema for the authentication 
//       username: {type: String},
//       email: {type: String},
//       password: {type: String},
//        token: {}
//     })
    
//     const User = mongoose.model('User', Auth);
    



///____________________________Doctor ______________________




const doctorschema = Schema({ //Doctor description schema
      id:{type:Number , unique:true},
      firstname:{type: String,
            required: true},
      lastname:{type: String,
            required: true}, 
      password:{type:String,
            required: true},
      email:{type:String,
            required: true, unique: true,
            },
      mobile:{type:String,
            required: true},
      gender: {type: String,
      },
      address: {type: String,
       },
    img :{type: String},
    smallbrief:{type: String}
  })
  
  const Userdoctor = mongoose.model('Userdoctor', doctorschema);
  
  

/////--------------------------------//----------------------------------------


module.exports={Userdoctor, Userpatient,Workingdaysmodel,Specializationmodel,Appoinmentsmodel};
