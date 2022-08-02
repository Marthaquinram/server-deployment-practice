// const request = require('express');
const { response } = require('express');
const supertest = require('supertest');
const { db } = require('../src/db');
const { soccer } = require('../src/models/soccer');
const server = require('../src/server');
const request = supertest(server.app);

//this clears our database
beforeEach(async () => {
    await db.sync();
});
describe('bands', () => {
    // creates a band
    it('creates a band', async () => {
        let response = await request.post('/bands').send({
            musicBands: 'test band',
            genre: 'rock'
        });

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            musicBands: 'test band',
            genre: 'rock'
        });
    });

    // this gets  the band
    it('retrieves a band', async () => {
        let createResponse = await request.post('/bands').send({
            musicBands: 'test band',
            genre: 'rock'
        });

        expect(createResponse.status).toBe(200);
        const createdId = createResponse.body.id;

        let retrieveResponse = await request.get(`/bands/${createdId}`);
        console.log(retrieveResponse.body);
        expect(retrieveResponse.status).toBe(200);
        expect(retrieveResponse.body).toMatchObject({
            id: createdId,
            musicBands: 'test band',
            genre: 'rock',
        });
    });
    it('can update a band', async () => {
        let createResponse = await request.post('/bands').send({
            musicBands: 'test band',
            genre: 'rock'

        });
        expect(createResponse.status).toBe(200);
        const createdId = createResponse.body.id;

        const updateRes = await request.put(`/bands/${createdId}`);
        expect(updateRes.status).toBe(200);
    });
    it('deletes a band', async () => {
        let createResponse = await request.post('/bands').send({
            musicBands: 'test band',
            genre: 'rock'

        });

        expect(createResponse.status).toBe(200);
        const createdId = createResponse.body.id;

        let retrieveResponse = await request.delete(`/bands/${createdId}`);
        expect(retrieveResponse.status).toBe(200);
    });
});
