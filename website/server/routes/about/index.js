const express = require('express');

const router = express.Router();

module.exports = () => {
    router.get('/', (req, res, next) => {
        return res.send('About Section');
    });

    router.get('/:name', (req, res, next) => {
        return res.send(`About section for ${req.params.name}`);
    });

    return router;
}