// Assertion - check to see if something is what we expect

// expect(true).toBe(true); // SGTM
// expect(3).toBe(5); // ?? sus

// test organization - describe, it
//   describe groups tests
//   it is a single test case
// test setup


// express is the library that builds the server and supertest is the library that helps us test the server.
const supertest = require("supertest");
const server = require("../src/server");
const request = supertest(server.app);

describe("Node Server", () => {
    it("says hello world", async () => {
        // set up the test so it can do a thing
        // Prepare the server
        // (see above line 15, we dont need to rewrite that line every time. saves duplication.)
        // perform an action, that does the thing
        // request the / route
        const response = await request.get("/"); // The response is a promise
        // assert or expect the result of the action
        // expect the / route to respond with hello
        expect(response.status).toBe(200);
        expect(response.text).toBe("Hello, World");
    });

    it("returns some data", async () => {
        const response = await request.get("/data");

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            name: "Martha",
            role: "student"
        });
    });

    it('bad route', async () => {
        const response = await request.get('/potato');
        expect(response.status).toBe(404);
    });

    it('returning no name', async () => {
        const response = await request.get('/person/').query({});
        expect(response.status).toBe(500);
    });

    it('martha', async () => {
        const response = await request.get('/person/?name=martha').query({});
        expect(response.status).toBe(200);
    });
});
