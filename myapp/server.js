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

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('build'));
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

var db = require("./data.js");
var count = 0;


// ----------- Login As Patient --------
app.post('/loginpatient', function (req, res) {
  db.Userpatient.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) { console.log(''); return res.status(401).send({ auth: false, token: null }) };
    var token = jwt.sign({ id: user._id }, config.secret, {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
  });
});


// ----------- Login As Doctor --------

app.post('/logindoctor', function (req, res) {
  db.Userdoctor.findOne({ email: req.body.email }, function (err, user) {
    if (err) return res.status(500).send('Error on the server.');
    if (!user) return res.status(404).send('No user found.');
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passwordIsValid) { console.log(''); return res.status(401).send({ auth: false, token: null }) };
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
//_________________________________________=>{ Get Data from Db To Docprofile }<=__________
app.get("/gettingdata", (req, res) => {
  db.Userdoctor.find({}).sort()
    .then(data => { res.json(data) })
});

//_________________________________________=>{ Get Data from Db To Docprofile }<=__________

app.get('/getinfodoc/:id', (req, res) => {
  var emailuser = req.params.id;
  db.Userdoctor.findOne({ email: emailuser }).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});

app.get('/appoinmentfordoctor/:id', (req, res) => {
  var doctorid = req.params.id;
  db.Appoinmentsmodel.find({ Doctorid: doctorid }).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});


//_________________________________________=>{ Get Data from Db To Patient }<=__________
app.get('/getinfopatient/:id', (req, res) => {
  var emailuser = req.params.id;

  db.Userpatient.findOne({ email: emailuser }).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    localStorage.removeItem('emp');
    res.json(data);
  });
});
//_________________________
app.get('/getpatientsname/:id', (req, res) => {
  var emailuser = req.params.id;
  db.Userpatient.find({ email: emailuser }).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    localStorage.removeItem('emp');
    res.json(data);
  });
});

//_________________________________________=>{ Get Data from Db To calendar }<=__________
app.get('/appoinment/:id', (req, res) => {
  var doctorid = req.params.id;
  db.Appoinmentsmodel.find({ Doctorid: doctorid }).exec((err, data) => {
    if (err) {
      console.log(err);
      req.send();
    }
    res.json(data);
  });
});


//// ------------------ Register ------------------

// Make appoinment 
app.post('/getappoinments', (req, res) => {
  var EndTimes = req.body.EndTime;
  var Guids = req.body.Guid;
  var Ids = req.body.Id;
  var Indexs = req.body.Index;
  var IsReadonlys = req.body.IsReadonly;
  var StartTimes = req.body.StartTime;
  var Subjects = req.body.Subject;
  var Patientemais = req.body.Patientemai;
  var doctorids = req.body.doctorid;
  var newAppoinmentt = new db.Appoinmentsmodel({
    EndTime: EndTimes,
    Guid: Guids,
    Id: Ids,
    Index: Indexs,
    IsReadonly: IsReadonlys,
    StartTime: StartTimes,
    Subject: Subjects,
    Patientemai: Patientemais,
    Doctorid: doctorids

  })
  newAppoinmentt.save(function (err) {
    if (err !== null) {
      res.status(500).json({ error: "save failed", err: err });
      return;
    } else {
      res.status(201).json('DONE');
    };
  });


})

//// ---------- Sign Up patient ------- 
app.post('/patientregister', [check('Email').isEmail(), check('password').isLength({ min: 6 })// password must be at least 6 chars long
], (req, res) => {
  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  var firstnames = req.body.firstName;
  var lastnames = req.body.lastName;
  var emails = req.body.Email;
  var mobiles = req.body.mobilenum;
  var addresss = req.body.Address;
  var genders = req.body.Gender

  var hashedPassword = bcrypt.hashSync(req.body.password, 8);
  var newpatient = new db.Userpatient({
    id: ++count,
    firstname: firstnames,
    lastname: lastnames,
    password: hashedPassword,
    email: emails,
    mobile: mobiles,
    address: addresss,
    gender: genders
  },

    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });
  newpatient.save(function (err) {
    if (err !== null) {
      res.status(500).json({ error: "save failed", err: err });
      return;
    } else {
      res.status(201).json(newpatient);
    };
  });
});


//// ---------- Sign Up Doctor -------

app.post('/doctorregister', [check('Email').isEmail(), check('password').isLength({ min: 6 })// password must be at least 6 chars long
], (req, res) => {

  // Finds the validation errors in this request and wraps them in an object with handy functions
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  var firstnames = req.body.firstName;
  var lastnames = req.body.lastName;
  var emails = req.body.Email;
  var mobiles = req.body.mobilenum;
  var genders = req.body.Gender;
  var addresss = req.body.Address;
  // var img =req.body.img;
  var specializations = req.body.specialization;
  var smallbriefs = req.body.shortbrief;
  var workingdaysa = req.body.workingdays;
  var hashedPasswords = bcrypt.hashSync(req.body.password, 8);
  var newdoctor = new db.Userdoctor({
    firstname: firstnames,
    lastname: lastnames,
    password: hashedPasswords,
    mobile: mobiles,
    email: emails,
    gender: genders,
    address: addresss,
    // img :img,
    specialize: specializations,
    smallbrief: smallbriefs,
    Workingdays: workingdaysa,
  },

    function (err, user) {
      if (err) return res.status(500).send("There was a problem registering the user.")
      // create a token
      var token = jwt.sign({ id: user._id }, config.secret, {
        expiresIn: 86400 // expires in 24 hours
      });
      res.status(200).send({ auth: true, token: token });
    });

  newdoctor.save(function (err) {
    if (err !== null) {
      res.status(500).json({ error: "save failed", err: err });
      return;
    } else {
      res.status(201).json(newdoctor);
    };
  });

});



app.get('/logout', function (req, res) {
  res.status(200).send({ auth: false, token: null });
});

app.get('/222', (req, res) => {

  res.send('hi')
  console.log(res.body, '/////////')

})


let port = process.env.PORT || 8000;
app.listen(port, () => console.log("we rock on 8000"));
