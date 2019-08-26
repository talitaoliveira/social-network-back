const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const app = require('../app');

describe('Routes', () => {
    it('First Test - Should always pass', () => {
        expect(true).to.be.true;
    });

    describe('Project Routes', () =>{
        it('Returns 200 response for /projects', (done) =>{
            chai.request(app)
            .get('/projects')
            .end((error, response) => {
                if(error) done(error);
                expect(response).to.have.status(200);
                done();
            });
        });
    });
});