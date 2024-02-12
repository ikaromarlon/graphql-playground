import db from '../db.js'

export const Query = {
  authors () {
    return db.authors
  },
  author (_, args) {
    return db.authors.find(author => author.id === args.id)
  }
}

export const Author = {
  reviews (parent) {
    return db.reviews.filter(review => review.authorId === parent.id)
  }
}

export const Mutation = {
  addAuthor (_, args) {
    const author = {
      ...args.data,
      id: Math.floor(Math.random() * 1000).toString()
    }
    db.authors.push(author)
    return author
  },
  updateAuthor (_, args) {
    db.authors = db.authors.map(author => {
      if (author.id === args.id) {
        return { ...author, ...args.data }
      }
      return author
    })
    return db.authors.find(author => author.id === args.id)
  },
  deleteAuthor (_, args) {
    db.authors = db.authors.filter(author => author.id !== args.id)
    return true
  }
}
