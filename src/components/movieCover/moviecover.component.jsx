import React from "react";
import "./moviecover.styles.css";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import ReadMoreReact from "read-more-react";
import { Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	container: {
		width: "90%",
		margin: "0 auto",
	},
	buttonsContainer: {
		marginTop: theme.spacing(1),
		marginBottom: theme.spacing(1),
	},
	button: {
		width: "100%",
		[theme.breakpoints.up("sm")]: {
			width: "50%",
		},
	},
	mediaImage: {
		width: "90%",
		height: "800px",
		[theme.breakpoints.down("sm")]: {
			width: "100%",
			height: "450px",
		},
	},
	mediaImageSM: {
		display: "none",
		[theme.breakpoints.down("sm")]: {
			display: "block",
		},
	},
	mediaImageLg: {
		display: "block",
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},
}));

const MovieCover = (props) => {
	const classes = useStyles();
	return (
		<Grid container className={classes.container}>
			<Grid item sm={5} className={classes.mediaImageSM}>
				<img
					className={classes.mediaImage}
					alt="media"
					src={props.large_cover_image}
				/>
			</Grid>
			<Grid item sm={7}>
				<h1 className="title">{props.title_english}</h1>
				<div>
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
					<Grid container>
						<Grid item xs={"auto"}>
							<p>{props.year}</p>
						</Grid>
						<Grid item xs={"auto"}>
							<p>{props.genres.toString()}</p>
						</Grid>
						<Grid item xs={"auto"}>
							<p>{props.runtime} minutes</p>
						</Grid>
					</Grid>
				</div>
				<span className="movie-summary">
					<ReadMoreReact
						text={props.summary}
						min={80}
						ideal={100}
						max={props.summary.length}
						readMoreText="read more"
					/>
				</span>
				<Grid
					className={classes.buttonsContainer}
					container
					spacing={2}
					direction="row"
					justify="center"
					alignItems="center">
					<Grid xs item>
						<Button
							variant="contained"
							size="large"
							color="secondary"
							className={classes.button}>
							PLAY
						</Button>
					</Grid>
					<Grid xs item>
						<Button
							variant="contained"
							color="primary"
							size="large"
							className={classes.button}>
							+My List
						</Button>
					</Grid>
				</Grid>
			</Grid>
			<Grid item sm={5} className={classes.mediaImageLg}>
				<img
					className={classes.mediaImage}
					alt="media"
					src={props.large_cover_image}
				/>
			</Grid>
		</Grid>
	);
};

export default MovieCover;
