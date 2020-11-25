"use strict";
exports.__esModule = true;
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = require("../schema");
var context_1 = require("../context");
var lambda = new graphql_yoga_1.GraphQLServerLambda({
    schema: schema_1.schema,
    context: context_1.createContext
});
exports.handler = lambda.handler;
// exports.playground = lambda.playgroundHandler
// export const server = new GraphQLServer({
//   schema,
//   context: createContext,
// }).start(() =>
//   console.log(
//     `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`,
//   ),
// )
