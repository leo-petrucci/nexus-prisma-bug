"use strict";
exports.__esModule = true;
exports.Query = void 0;
var schema_1 = require("@nexus/schema");
exports.Query = schema_1.queryType({
    definition: function (t) {
        t.field('test', {
            type: 'Test',
            resolve: function (parent, args, ctx) {
                return {
                    test: "test"
                };
            }
        });
    }
});
