const express = require('express');

const router = express.Router();

const aboutRoute = require('./about');
const feedbackRoute = require('./feedback');

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('Index');
    });

    router.use('/about', aboutRoute());
    router.use('/feedback', feedbackRoute());

    return router;
}