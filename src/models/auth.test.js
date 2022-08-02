// 'use strict';


describe.skip('web server authentication', () => {
    it('signs up user', async () => {
        const response = await mockRequest.post('/signup').send({ username: 'test user', password: 'test password' });
        expect(response.status).toBe(200);
        // console.log(request.body);
        expect(response.body.username).toEqual('test user');
        expect(response.body.password).toStartWith('$2b$10$');
        expect(response.body.length).toBeGreaterThan(40);
        expect(response.body.password).not.toEqual('test password');
        //Run it once, get the error and then,
        // expect(response.body.password).toEqual( this is where the JWT token will go);

    })
})
