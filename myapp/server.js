const express = require("express");
var request = require("request");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json({ extended: false })); 
app.use(bodyParser.urlencoded({ extended: false }));
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var validator = require('validator');
 var config = require('./src/auth/config.js');
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 
var VerifyToken = require('./src/auth/Authentecation');
app.use(express.json());
const { check, validationResult } = require('express-validator');
const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));
// app.use(express.static(__dirname + ''));
// var Userpatient = require('./data.js').Userpatient
// var Userdoctor = require('./data.js').Userdoctor
var db = require("./data.js");

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'))
// })
// ----------- Login --------
app.post('/loginpatient', function(req, res) {
  console.log('///////////// seeeeerver',req.body)
  db.Userpatient.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid){ console.log('sucess'); return res.status(401).send({ auth: false, token: null })};
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    
    res.status(200).send({ auth: true, token: token });
  });
});


app.post('/logindoctor', function(req, res) {
  console.log('///////////// seeeeerver',req.body)
  db.Userdoctor.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid){ console.log('sucess'); return res.status(401).send({ auth: false, token: null })};
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    
    res.status(200).send({ auth: true, token: token });
  });
});


// ------------ get hole data to the frontend -------------------


app.get("/patients", (req, res) => {
  // console.log(req.body)
  db.Userpatient.find({}).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});
app.get("/gettingdata", (req, res) => {
  // console.log(req.body)
  db.Userdoctor.find({}).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
    console.log(data,'aaaa')
  });
});


//// ------------------ Register ------------------
 


/// ------ patient
app.post('/patientregister',[check('Email').isEmail(),check('password').isLength({ min: 6 })// password must be at least 6 chars long
  ], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
var firstnames = req.body.firstName;
console.log(firstnames)
var lastnames = req.body.lastName;
var emails = req.body.Email;
var mobiles = req.body.mobilenum;
var addresss = req.body.Address ;
var genders  = req.body.Gender

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  // console.log(req.body.password,'hashing',hashedPassword)
  // console.log(req.body.lastName,'////////////This is data');
  var newpatient = new db.Userpatient({
    firstname: firstnames,
    lastname: lastnames,
    password: hashedPassword,
    email: emails,
    mobile: mobiles,
    address: addresss ,
    gender : genders
  },

  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });  
  newpatient.save();
});
/// ------ doctor

app.post('/doctorregister',[check('Email').isEmail(),check('password').isLength({ min: 6 })// password must be at least 6 chars long
  ], (req, res) => {
    console.log(req.body,",/////)")
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  var firstnames = req.body.firstName;
  var lastnames =req.body.lastName;
  var emails    = req.body.Email;
 var mobiles  =req.body.mobilenum;
 var genders =req.body.Gender;
 var addresss =req.body.Address;
  var img =req.body.img;
   var specializations=req.body.specialization;
   var smallbriefs=req.body.shortbrief;
 var workingdays = req.body.workingdays;

  var hashedPasswords = bcrypt.hashSync(req.body.password, 8);
  
  var newdoctor = new db.Userdoctor({
    firstname : firstnames,
    lastname :lastnames,
    password: hashedPasswords,
    mobile   :mobiles,
    email: emails,
    gender  :genders,
    address :addresss,
    // img :img,
  specialization:specializations,
  smallbrief:smallbriefs,
  workingday:workingdays,

  } ,

  

  function (err, user) {
    if (err) return res.status(500).send("There was a problem registering the user.")
    // create a token
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });   
  var newspechalize = new db.Specializationmodel({
    specialize : specializations,
    Doctor: newdoctor
  });
  var newworkingday = new db.Workingdaysmodel({
    Workingdays: workingdays,
    Doctor:newdoctor

  })
  newdoctor.save();
  newspechalize.save();
  newworkingday.save();
});
  //user login
  

app.get('/logout', function(req, res) {
res.status(200).send({ auth: false, token: null });
});

// app.get("/", (req, res) => {
// res.json({ status: "success", message: "hello" });
// });



let port = process.env.PORT || 8000;
app.listen(port, () => console.log("we rock on 8000"));