'use strict';
// validator.js
// Checks the query string for a name property
// Sends the request through when valid, forces an error when not

const validator = (req, res, next) => {
    console.log(req.query.name);
    next();
};

module.exports = {
    validator,
};
