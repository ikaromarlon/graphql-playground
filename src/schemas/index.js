export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }
  input AddGameInput {
    title: String!
    platform: [String!]!
  }
  input EditGameInput {
    title: String
    platform: [String!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }
  input AddReviewInput {
    rating: Int!
    content: String!
    authorId: String!
    gameId: String!
  }
  input EditReviewInput {
    rating: Int
    content: String
    authorId: String
    gameId: String
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }
  input AddAuthorInput {
    name: String!
    verified: Boolean!
  }
  input EditAuthorInput {
    name: String
    verified: Boolean
  }

  type Query {
    games: [Game]
    game(id: ID!): Game
    reviews: [Review]
    review(id: ID!): Review
    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    addGame(data: AddGameInput!): Game
    updateGame(id: ID!, edits: EditGameInput): Game
    deleteGame(id: ID!): Boolean
    
    addAuthor(data: AddAuthorInput!): Author
    updateAuthor(id: ID!, data: EditAuthorInput): Author
    deleteAuthor(id: ID!): Boolean

    addReview(data: AddReviewInput!): Review
    updateReview(id: ID!, data: EditReviewInput): Review
    deleteReview(id: ID!): Boolean
  }
`
