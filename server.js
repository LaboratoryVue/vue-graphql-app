const { ApolloServer, gql } = require('apollo-server');
const TODOS = [
  { task: 'Buy milk', completed: false },
  { task: 'Bring car', completed: true }
];
const typeDefs = gql`
  type Todo {
    task: String
    completed: Boolean
  }
  type Query {
    getTodo: [Todo]
  }
`;
const resolvers = {
  Query: {
    getTodos: function() {
      return todos;
    }
  }
};
const server = new ApolloServer({
  typeDefs,
  resolvers
});
server.listen().then(({ url }) => console.log(`Start Apollo Server on ${url}`));
