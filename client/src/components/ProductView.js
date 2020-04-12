import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 8,
  },
  title: {
    fontSize: 14,
  },
});

const GET_PRODUCT = gql`
  query Product($productId: String!) {
    product(id: $productId) {
    id
    title
    description
  }
}`

export default ({title, description}) => {
  const classes = useStyles();
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_PRODUCT, {
    variables: { productId: id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h3">
          {title}
        </Typography>
        <Typography>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
