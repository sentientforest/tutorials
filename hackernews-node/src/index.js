const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { PubSub } = require('graphql-yoga')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote 
}

/*
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany()
    },
    link: (parent, args) => {
      const idx = links.findIndex(l => l.id === args.id)
      return links[idx]
    }
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          description: args.description,
          url: args.url,
        }
      })
      return newLink
    },
    updateLink: (parent, args) => {
      const idx = links.findIndex(l => l.id === args.id)
      links[idx].description = args.description || links[idx].description
      links[idx].url = args.url || links[idx].url
      return links[idx]
    },
    deleteLink: (parent, args) => {
      const idx = links.findIndex(l => l.id === args.id)
      const link = {...links[idx]}
      links.splice(idx, 1)
      return link
    }
  }
}
*/
const prisma = new PrismaClient()
const pubsub = new PubSub()

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => {
    return {
      ...request,
      prisma,
      pubsub
    }
  }
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
