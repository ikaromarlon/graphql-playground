import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import config from './config.js'
import { typeDefs } from './schemas/index.js'
import { resolvers } from './resolvers/index.js'

const state = {
  instance: null,
  isConnected: false,
  address: null
}

export function getServer () {
  if (state.instance === null) {
    state.instance = new ApolloServer({
      typeDefs,
      resolvers
    })
  }

  const start = async () => {
    const { url } = await startStandaloneServer(state.instance, {
      listen: { port: config.app.port }
    })
    state.address = url
    state.isConnected = true
  }

  const isConnected = () => {
    return state.isConnected
  }

  const getAddress = () => {
    if (!isConnected()) throw new Error('Server is not connected')
    return state.address
  }

  const shutDown = async () => {
    await state.instance.stop()
    state.isConnected = false
    state.address = null
  }

  return {
    start,
    isConnected,
    getAddress,
    shutDown
  }
}
