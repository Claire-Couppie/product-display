import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 8,
  },
  title: {
    fontSize: 14,
  },
});

export default ({id, title, description}) => {
  const classes = useStyles();

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
      <CardActions>
        <Button size="small" color="primary"  href={`/view/${id}`}>
          View
        </Button>
      </CardActions>
    </Card>
  );
}
