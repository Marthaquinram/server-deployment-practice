const { logger } = require('../src/middleware/logger');

describe("logger", () => {
    //test that logger calls console.log
    it('logs via console.log', () => {
        jest.spyOn(console, 'log').mockImplementation();
        //phase 1: setup
        const req = { method: 'GET', url: '/' };
        const res = {};
        const next = () => { };
        //Action:
        logger(req, res, next);

        //Phase 3: assertion that some behaviour happened
        expect(console.log).toHaveBeenCalledWith('GET', '/');
    });
    //test that logger calls `next() to pass control to next middleware.
    it(' calls next()', () => {
        const req = { method: 'GET', url: '/' };
        const res = {};
        const next = jest.fn();
        //Action:
        logger(req, res, next);
        //Assetion
        expect(next).toHaveBeenCalled();
    })
});
