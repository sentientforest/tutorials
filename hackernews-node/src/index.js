const { GraphQLServer } = require('graphql-yoga')

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length
const resolvers = {
  Query: {
    info: () => `This is the API of a Hackernews Clone`,
    feed: () => links,
    link: (parent, args) => {
      const idx = links.findIndex(l => l.id === args.id)
      return links[idx]
    }
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
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

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
