import db from '../db.js'

export const Query = {
  reviews () {
    return db.reviews
  },
  review (_, args) {
    return db.reviews.find(review => review.id === args.id)
  }
}

export const Review = {
  author (parent) {
    return db.authors.find(author => author.id === parent.authorId)
  },
  game (parent) {
    return db.games.find(game => game.id === parent.gameId)
  }
}

export const Mutation = {
  addReview (_, args) {
    const review = {
      ...args.data,
      id: Math.floor(Math.random() * 1000).toString()
    }
    db.reviews.push(review)
    return review
  },
  updateReview (_, args) {
    db.reviews = db.reviews.map(review => {
      if (review.id === args.id) {
        return { ...review, ...args.data }
      }
      return review
    })
    return db.reviews.find(review => review.id === args.id)
  },
  deleteReview (_, args) {
    db.reviews = db.reviews.filter(review => review.id !== args.id)
    return true
  }
}
