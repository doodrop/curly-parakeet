'use strict';

const fs = require('fs');

const files = fs.readdirSync(__dirname);
const requires = files.filter(file => file.endsWith('-routes.js')).map(file => require(`./${file}`));

const routes = [].concat(...requires);
module.exports = routes;
