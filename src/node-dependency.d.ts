declare module "node-dependency" {
    import _ = require('lodash');

    export module utils {
        export var lodash:_.LoDashStatic;
    }
}