import { GraphQLServerLambda } from 'graphql-yoga'
import { permissions } from '../permissions'
import { schema } from '../schema'
import { createContext } from '../context'

const lambda = new GraphQLServerLambda({
  schema,
  context: createContext,
  middlewares: [permissions],
})

exports.handler = lambda.handler
// exports.playground = lambda.playgroundHandler
