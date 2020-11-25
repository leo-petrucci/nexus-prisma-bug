import { objectType } from '@nexus/schema'

export const User = objectType({
  name: 'Test',
  definition(t) {
    t.field('test', { type: 'String' })
  },
})