/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */

'use strict';

module.exports = require('./lib/express');
const express = require('./lib/express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('index', { title: 'Express Index Project' });
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'Express Index Project' });
});

app.get('/service', (req, res) => {
    res.render('service', { title: 'Express Index Project' });
});

app.get('/why', (req, res) => {
    res.render('why', { title: 'Express Index Project' });
});

app.get('/team', (req, res) => {
    res.render('team', { title: 'Express Index Project' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});