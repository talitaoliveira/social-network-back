const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const app = require('../app');

describe('First Test', () => {
    it('Should always pass', () => {
        expect(true).to.be.true;
    });
});

describe('Hello World Route', (done) => {
    it('Returns a 200 response', (done) => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                if (error) done(error);
                expect(response).to.have.status(200);
                done();
            });
    });

    it('Returns a "Hello World!" message', (done) => {
        chai.request(app)
            .get('/')
            .end((error, response) => {
                if (error) done(error);
                expect(response.body).to.be.deep.equal({
                    message: 'Hello, world!'
                });
                done();
            });
    });
});