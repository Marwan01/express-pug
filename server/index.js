const express = require('express');
const path = require('path');

const app = express();


app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'));

app.use(express.static('public'));
const routes = require('./routes');
app.get('/favicon.ico', (req, res, next) => {
    return res.sendStatus(204);
})
app.use('/', routes());

app.listen(3000);

module.export = app;