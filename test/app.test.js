const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const app = require('../app');

describe('First Test', () => {
    it('Should always pass', () =>{
        expect(true).to.be.true;
    }); 
});

describe('Hello World Route', (done) => {
    chai.request(app)
    .get('/')
    .end((error, response) => {
        if(error) done();
        expect(response).to.have.status(200);
        done();
    });
});