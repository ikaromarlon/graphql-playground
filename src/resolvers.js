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
  },
  Game: {
    reviews (parent) {
      return db.reviews.filter(review => review.gameId === parent.id)
    }
  },
  Author: {
    reviews (parent) {
      return db.reviews.filter(review => review.authorId === parent.id)
    }
  },
  Review: {
    author (parent) {
      return db.authors.find(author => author.id === parent.authorId)
    },
    game (parent) {
      return db.games.find(game => game.id === parent.gameId)
    }
  },
  Mutation: {
    addGame (_, args) {
      const game = {
        ...args.game,
        id: Math.floor(Math.random() * 1000).toString()
      }
      db.games.push(game)
      return game
    },
    updateGame (_, args) {
      db.games = db.games.map(game => {
        if (game.id === args.id) {
          return { ...game, ...args.edits }
        }
        return game
      })
      return db.games.find(game => game.id === args.id)
    },
    deleteGame (_, args) {
      db.games = db.games.filter(game => game.id !== args.id)
      return true
    }
  }
}

export default resolvers
