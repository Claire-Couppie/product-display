import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";
import ProductCard from './ProductCard';

const GET_PRODUCTS = gql`
{
  products {
    id
    title
    description
  }
}`

export default () => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data.products || !data.products.length) return <p>No product</p>;

  return data.products.map((product) => {
    return <ProductCard key={product.id} title={product.title} description={product.description} />;
  });
}