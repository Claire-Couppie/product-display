const resolvers = {
  Query: {
    products: (parent, args, { dataSources }) => {
      return dataSources.db.getProducts();
    },
  },
};

exports.resolvers = resolvers;
