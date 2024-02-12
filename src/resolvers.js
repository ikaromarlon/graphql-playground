import db from './db.js'

const resolvers = {
  Query: {
    games () {
      return db.games
    },
    game (_, args) {
      return db.games.find(game => game.id === args.id)
    },
    authors () {
      return db.authors
    },
    author (_, args) {
      return db.authors.find(author => author.id === args.id)
    },
    reviews () {
      return db.reviews
    },
    review (_, args) {
      return db.reviews.find(review => review.id === args.id)
    }
  }
}

export default resolvers
