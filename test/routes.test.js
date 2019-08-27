const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;
const sinon = require('sinon');
const app = require('../app');

describe('Routes', () => {
    it('First Test - Should always pass', () => {
        expect(true).to.be.true;
    });

    describe('Project Routes', () =>{
        it('Returns 200 response for /projects', (done) =>{
            chai.request(app)
            .get('/api/projects')
            .end((error, response) => {
                if(error) done(error);
                expect(response).to.have.status(200);
                done();
            });
        });

        it('Returns  "Hello, Projects!" message from /projects', (done) =>{
            chai.request(app)
            .get('/api/projects')
            .end((error, response) => {
                if(error) done(error);
                expect(response.body).to.be.deep.equal({
                    message: 'Hello, Projects!'
                })
                done();
            });
        });

        it('Should call function listProjects() from ProjectController', (done) =>{
            const projectController = require('../src/components/projects/project.controller')
            const projectList = sinon.spy(projectController, 'listProjects');

            chai.request(app)
            .get('/api/projects')
            .end((error, response) => {
                if(error) done(error);
                assert(projectList.called, 'Function listProjects not called')
                projectList.restore();
                done();
            });
        });
    });

    describe('User Routes', () => {
        it('Returns 200 response for /users', (done) => {
            chai.request(app)
            .get('/api/users')
            .end((error, response) => {
                if(error) done(error);
                expect(response).to.have.status(200);
                done();
            });
        });

        it('Returns  "Hello, Users!" message from /users', (done) =>{
            chai.request(app)
            .get('/api/users')
            .end((error, response) => {
                if(error) done(error);
                expect(response.body).to.be.deep.equal({
                    message: 'Hello, Users!'
                })
                done();
            });
        });
    });
});