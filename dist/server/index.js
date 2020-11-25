"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var permissions_1 = require("../permissions");
var schema_1 = require("../schema");
var context_1 = require("../context");
var lambda = new graphql_yoga_1.GraphQLServerLambda({
    schema: schema_1.schema,
    context: context_1.createContext,
    middlewares: [permissions_1.permissions]
});
exports.handler = lambda.handler;
// exports.playground = lambda.playgroundHandler
