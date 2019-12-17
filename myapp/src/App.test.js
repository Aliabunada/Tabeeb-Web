import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});




const chai = require("chai");
const chaiHttp = require("chai-http");
var serverproxy = require('../server')
const { expect } = chai;
chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(serverproxy)
      .get("/222")
      .end((err, res) => {
        expect(res).to.have.status(200);
        // expect(res.body.status).to.equals("success");
        // expect(res.body.message).to.equals("hi");
        done();
      });
  });
 
});
// var request = require('supertest')
// var app = require('./')


