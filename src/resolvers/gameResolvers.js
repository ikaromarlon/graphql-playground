import db from '../db.js'

export const Query = {
  games () {
    return db.games
  },
  game (_, args) {
    return db.games.find(game => game.id === args.id)
  }
}

export const Game = {
  reviews (parent) {
    return db.reviews.filter(review => review.gameId === parent.id)
  }
}

export const Mutation = {
  addGame (_, args) {
    const game = {
      ...args.data,
      id: Math.floor(Math.random() * 1000).toString()
    }
    db.games.push(game)
    return game
  },
  updateGame (_, args) {
    db.games = db.games.map(game => {
      if (game.id === args.id) {
        return { ...game, ...args.data }
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
