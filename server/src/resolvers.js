const resolvers = {
  Query: {
    products: (parent, args, { dataSources }) => {
      return dataSources.db.getProducts();
    },
    product: (parent, { id }, { dataSources }) => {
      return dataSources.db.getProductById(id);
    },
  },
};

exports.resolvers = resolvers;
