'use strict';

const expect = require('chai').expect

const readFile = require('../src/readFile');

const {
    images
} = require('./official-images.json');

describe('Commands', () => {
    // Init CLI
    before('Create doc path', () => {
        //
    })

    it('should return all available documentation', async () => {
        let available = await readFile.listDocs();
        expect(available, 'available docs').to.have.lengthOf(images.length);
        expect(available).to.deep.equal(images.sort());
    })
})
