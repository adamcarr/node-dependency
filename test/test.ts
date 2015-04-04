/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../src/node-dependency.d.ts" />

import nodeDependency = require('node-dependency');

var results = nodeDependency.utils.lodash.filter([{id:1}, {id:2}, {id:3}, {id:4}], (item) => item.id%2===0);
console.log(results);