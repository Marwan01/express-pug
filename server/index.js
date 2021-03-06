const express = require('express');
const createError = require('http-errors')
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

app.use((req, res, next) => {
    return next(createError(404, 'file not found'));
});

app.use((err, req, res, next) => {
    res.locals.message = err.message;
    const status = err.status || 500;
    res.locals.status = status;
    res.status(status);
    return res.render('error');
});
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);

module.export = app;