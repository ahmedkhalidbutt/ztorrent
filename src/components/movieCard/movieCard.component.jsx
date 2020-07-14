import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    maxWidth: "90%",
    margin: '10px auto',
    backgroundColor: '#999990'
  },
  media: {
    height: 200,
  },
});

export default ({data}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea component={Link} to={`/movie/${data.slug}`}>
        <CardMedia
          className={classes.media}
          image={data.medium_cover_image}
          title="Contemplative Reptile"
        />
        {/* <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {data.summary.slice(0, 100)}
          </Typography>
        </CardContent> */}
      </CardActionArea>
      {/* <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button component={Link} to={`/movie/${data.slug}`} size="small" color="primary">
          Visit
        </Button>
      </CardActions> */}
    </Card>
  );
}
