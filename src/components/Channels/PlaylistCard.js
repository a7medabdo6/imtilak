import React from "react";
// MUI Component
import { Box, Link, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
// Icons
import PlaylistIcon from '@material-ui/icons/PlaylistPlay';// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({
	card__link: {
		color: 'black',
		fontWidth: "bold",
		"&:hover": {
			textDecoration: 'none',
			color: theme.palette.primary.main,
			transition: "all .3s ease",
		}
	},

	contact__subtitle: {
		margin: "15px 0px",
		color: theme.palette.primary.main,
	},

	contact__item__icon: {
		paddingRight: '10px',
	},

	root: {
		display: 'flex',

		backgroundColor: "#eee",
	},
	boxImage: {
		backgroundSize: "cover",
		height: "auto",
		backgroundPosition: "center",
	},

}));

function Index(props) {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Grid item>

				<Card className={classes.root}>

					<CardActionArea>
						<CardMedia
							className={classes.boxImage}
							component="img" height="auto"
							image="https://i.ytimg.com/vi/orfNL6XtCF0/maxresdefault.jpg"
						/>
						<CardContent>

							<Box display="flex" alignItems="center">
								<PlaylistIcon className={classes.contact__item__icon} />
								<Link className={classes.card__link} variant="h6">IconAntalya Projects</Link>
							</Box>

						</CardContent>
					</CardActionArea>

				</Card>

			</Grid>
		</Grid>

	);
}

export default Index;
