/// <reference path="typings/tsd.d.ts" />

declare module "node-dependency" {
    import _ = require('lodash');

    export module utils {
        export var lodash:_.LoDashStatic;
    }
}