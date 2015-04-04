/// <reference path="../typings/tsd.d.ts" />
/// <reference path="../src/node-dependency.d.ts" />
var nodeDependency = require('node-dependency');
var results = nodeDependency.utils.lodash.filter([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }], function (item) { return item.id % 2 === 0; });
console.log(results);
