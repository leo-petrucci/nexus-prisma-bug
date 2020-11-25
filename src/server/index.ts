import { GraphQLServerLambda, GraphQLServer } from 'graphql-yoga'
import { schema } from '../schema'
import { createContext } from '../context'

const lambda = new GraphQLServerLambda({
  schema,
  context: createContext,
})

exports.handler = lambda.handler
// exports.playground = lambda.playgroundHandler

// export const server = new GraphQLServer({
//   schema,
//   context: createContext,
// }).start(() =>
//   console.log(
//     `🚀 Server ready at: http://localhost:4000\n⭐️ See sample queries: http://pris.ly/e/ts/graphql-auth#using-the-graphql-api`,
//   ),
// )