"use strict";
exports.__esModule = true;
exports.User = void 0;
var schema_1 = require("@nexus/schema");
exports.User = schema_1.objectType({
    name: 'Test',
    definition: function (t) {
        t.field('test', { type: 'String' });
    }
});
