import { intArg, queryType, stringArg } from '@nexus/schema'
import { getUserId } from '../utils'

export const Query = queryType({
  definition(t) {
    t.field('test', {
      type: 'Test',
      resolve: (parent, args, ctx) => {
        return {
          test: "test"
        }
      },
    })
  },
})
