'use strict';
const express = require('express');
const app = express();

app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    // res.send('hello world');
    res.sendFile('index.html', {root: './public'});
});

app.listen(5000, () => {
    console.log('running on port 5000...');
});