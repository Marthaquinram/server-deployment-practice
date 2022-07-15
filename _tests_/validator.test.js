const { validator } = require('../src/middleware/validator');

describe('validator', () => {
    //test that logger calls console.log
    it('validator', () => {
        //phase 1: setup
        const req = { query: { name: 'test' } };
        const res = {};
        const next = jest.fn();

        //Action:
        validator(req, res, next);

        //Phase 3: assertion that some behaviour happened
        expect(next).toHaveBeenCalledWith();
    });

    //test that logger calls console.log
    it('validator', () => {
        //phase 1: setup
        const req = { query: {} };
        const res = {};
        const next = jest.fn();

        //Action:
        validator(req, res, next);

        //Phase 3: assertion that some behaviour happened
        expect(next).toHaveBeenCalledWith('name is required');
    });
    //test that logger calls `next() to pass control to next middleware.

    // it(' calls next()', () => {
    //     const req = { method: 'GET', url: '/' };
    //     const res = {};
    //     const next = jest.fn();
    //     //Action:
    //     validator(req, res, next);


    //     //Assetion
    //     expect(next).toHaveBeenCalled();
    // })



});
