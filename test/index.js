'use strict';

const expect = require('chai').expect;
const sinon = require('sinon');


const readFile = require('../src/readFile');
const cli = require('../src');

const {
    images
} = require('./official-images.json');

let logSpy;

beforeEach('Mock console', () => {
    logSpy = sinon.spy(console, 'log');
})

afterEach(() => {
    // Restore the default sandbox here
    sinon.restore();
});

after(() => {
    //Delete docpAth
});

describe('Commands', () => {
    // Init CLI

    it('should return all available documentation', async function () {
        let available = await readFile.listDocs();
        expect(available, 'available docs').to.have.lengthOf(images.length);
        expect(available).to.deep.equal(images.sort());
    })

    it('should log update info twice', async function () {
        this.timeout(10000);

        await cli.update();

        expect(logSpy.calledThrice).to.be.true;
    })
})
