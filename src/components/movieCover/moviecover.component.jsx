import React from "react";
import "./moviecover.styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  padding: {
    padding: "10px 70px",
    margin: "0px 20px"
  },
}));

const MovieCover = (props) => {
  console.log(props);
  const classes = useStyles();
  return (
    <div className="movie-cover">
      <div className="movie-content">
        <h1 className="title">{props.title_english}</h1>
        <div className="movie-detail">
          <div>
            <Rating
              name="rating"
              max={10}
              value={`${parseInt(props.rating)}`}
              precision={0.5}
              readOnly
            />
            <span></span>
          </div>
          <p>{props.year}</p>
          <p>{props.genres.toString()}</p>
          <p>{props.runtime} minutes</p>
        </div>
        <span className="movie-summary">{props.summary}</span>
        <div className="play-button-div">
          <Button
            variant="contained"
            size="large"
            color="secondary"
            className={classes.padding}
          >
            PLAY
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.padding}
          >
            +My List
          </Button>
        </div>
      </div>
      <div className="cover-image">
        <img alt="movie-cover" src={props.large_cover_image} />
      </div>
    </div>
  );
};

export default MovieCover;
