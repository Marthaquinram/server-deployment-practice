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
describe('soccer', () => {
    // creates a player
    it('creates a soccer player', async () => {
        let response = await request.post('/soccer').send({
            soccerPlayer: 'Hector Bellerin',
            team: 'Arsenal',
            age: 27,
        });

        expect(response.status).toBe(200);
        expect(response.body).toMatchObject({
            soccerPlayer: 'Hector Bellerin',
            team: 'Arsenal',
            age: 27,
        });
    });

    // this gets  the soccer players
    it('retrieves a soccer player', async () => {
        let createResponse = await request.post('/soccer').send({
            soccerPlayer: 'Hector Bellerin',
            team: 'Arsenal',
            age: 27,
        });

        expect(createResponse.status).toBe(200);
        const createdId = createResponse.body.id;

        let retrieveResponse = await request.get(`/soccer/${createdId}`);
        console.log(retrieveResponse.body);
        expect(retrieveResponse.status).toBe(200);
        expect(retrieveResponse.body).toMatchObject({
            id: createdId,
            soccerPlayer: 'Hector Bellerin',
            team: 'Arsenal',
            age: 27,
        });

    });
    it('can update a soccer player', async () => {
        let createResponse = await request.post('/soccer').send({
            soccerPlayer: 'Hector Bellerin',
            team: 'Arsenal',
            age: 27,

        });
        expect(createResponse.status).toBe(200);
        const createdId = createResponse.body.id;

        const updateRes = await request.put(`/soccer/${createdId}`);
        expect(updateRes.status).toBe(200);
    });
    it('deletes a soccer player', async () => {
        let createResponse = await request.post('/soccer').send({
            soccerPlayer: 'Hector Bellerin',
            team: 'Arsenal',
            age: 27,

        });

        expect(createResponse.status).toBe(200);
        const createdId = createResponse.body.id;

        let retrieveResponse = await request.delete(`/soccer/${createdId}`);
        expect(retrieveResponse.status).toBe(200);
    });
});
