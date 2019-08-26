const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const expect = require('chai').expect;

describe('ProjectController', () => {
    it('First Test - Should always pass', () => {
        expect(true).to.be.true;
    });
});