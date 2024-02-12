import * as gameResolvers from './gameResolvers.js'
import * as authorResolvers from './authorResolvers.js'
import * as reviewResolvers from './reviewResolvers.js'

export const resolvers = {
  Query: {
    ...gameResolvers.Query,
    ...authorResolvers.Query,
    ...reviewResolvers.Query
  },
  Mutation: {
    ...gameResolvers.Mutation,
    ...authorResolvers.Mutation,
    ...reviewResolvers.Mutation
  },
  Game: gameResolvers.Game,
  Author: authorResolvers.Author,
  Review: reviewResolvers.Review
}
