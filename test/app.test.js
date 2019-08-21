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

describe('Test routes', () => {

    it('Should connect to /', (done) => {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            expect(err).to.be.null;
            expect(res).to.have.status(200);
            done();
        });
    });

    describe('ROUTES: projects', () => {

        it('Should GET /projects', (done) => {
            chai.request(app)
            .get('/projects')
            .end((err, res) => {
                expect(err).to.be.null;
                expect(res).to.have.status(200);
                done();
            });
        });

    });
});