const { gql } = require('apollo-server');

const typeDefs = gql`
  type Product {
    id: String
    title: String
    description: String
    price: Float
  }

  type Query {
    products: [Product]
  }
`;

exports.typeDefs = typeDefs;