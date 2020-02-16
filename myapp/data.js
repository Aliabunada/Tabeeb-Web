const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const URI = "mongodb+srv://Ali:ali@webteb-8zitg.mongodb.net/Webteb?retryWrites=true&w=majority"
mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true }); //, useMongoClient: true
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
      console.log("We're Connected to database!");
});

///____________________________ patient schema ______________________

const patientschema = Schema({ //patient description schema
      id: { type: Number, unique: true },
      firstname: {
            type: String,
            required: true
      },
      lastname: {
            type: String,
            required: true
      },
      password: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true, unique: true,
            lowercase: true
      },
      mobile: {
            type: String,
            required: true
      },
      gender: {
            type: String,
      },
      address: {
            type: String,
      }

})

const Userpatient = mongoose.model('Userpatient', patientschema);


const Appoinments = Schema({

      EndTime: { type: String },
      Guid: { type: String },
      Id: { type: String },
      Index: { type: String },
      IsReadonly: { type: String },
      StartTime: { type: String },
      Subject: { type: String },
      Patientemai: { type: String },
      Doctorid: { type: String }

})
const Appoinmentsmodel = mongoose.model('Appoinmentsmodel', Appoinments);


///____________________________Doctor schema______________________




const doctorschema = Schema({ //Doctor description schema

      firstname: {
            type: String,
            required: true
      },
      lastname: {
            type: String,
            required: true
      },
      password: {
            type: String,
            required: true
      },
      email: {
            type: String,
            required: true,
            unique: true
      },
      mobile: {
            type: String,
            required: true
      },
      gender: {
            type: String,
      },
      address: {
            type: String,
      },
      img: { type: String },
      Workingdays: { type: String },
      specialize: { type: String },
      smallbrief: { type: String }
})

const Userdoctor = mongoose.model('Userdoctor', doctorschema);



/////--------------------------------//----------------------------------------


module.exports = { Userdoctor, Userpatient, Appoinmentsmodel };
