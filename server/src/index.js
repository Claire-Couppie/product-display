const { ApolloServer } = require('apollo-server');
const { typeDefs } = require('./typeDefs');
const { resolvers } = require('./resolvers');
const { ProductDatabase } = require('./datasources');

const PG_HOST = process.env.PG_HOST;
const PG_USER = process.env.PG_USER;
const PG_PASSWORD = process.env.PG_PASSWORD;
const PG_DATABASE = process.env.PG_DATABASE;

const knexConfig = {
  client: "pg",
  connection: {
    host : PG_HOST,
    user : PG_USER,
    password : PG_PASSWORD,
    database : PG_DATABASE
  }
};

const db = new ProductDatabase(knexConfig);

const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    dataSources: () => ({ db })
 });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});