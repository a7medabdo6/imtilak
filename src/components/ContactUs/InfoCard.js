import React from "react";
// MUI Component
import { Box,  Link, Typography, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
// Icons
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from '@material-ui/icons/AlternateEmail';
import LocationIcon from '@material-ui/icons/LocationOn';
// Styles
import { makeStyles, alpha } from "@material-ui/core/styles";
import "react-multi-carousel/lib/styles.css";

const useStyles = makeStyles((theme) => ({

	contact__subtitle: {
		margin: "15px 0px",
		color: theme.palette.primary.main,
	},
	contact__item: {
		display: "flex",
		marginTop: "20px",
		alignContent: 'center',
	},
	contact__item__icon: {
		paddingRight: '15px',
	},
	root: {
		// width: "300px",
		// height: "310px",
		backgroundColor: "#eee",
	},
	Header: {
		color: theme.palette.primary.main,
	},
}));

function Index(props) {
	const classes = useStyles();

	return (
		<Grid item xs={12} md={6} lg={4}>
			<Grid item >

				<Box style={{ width: "100%", position: "relative" }}>
					<Card
						className={classes.root}
					>
						<CardContent
							className=""
							style={{ padding: "0px !important" }}
						>
							<Typography className={classes.Header} variant="h5">
								General Management - Istanbul

							</Typography>
							<div>
								<div className={classes.contact__item}>
									<WhatsAppIcon className={classes.contact__item__icon} />
									<Link href="#" target="_blank" variant="h6">00905074000900</Link>
								</div>

								<div className={classes.contact__item}>
									<PhoneIcon className={classes.contact__item__icon} />
									<Link href="#" target="_blank" variant="h6">00905074000900</Link>
								</div>

								<div className={classes.contact__item}>
									<EmailIcon className={classes.contact__item__icon} />
									<Link href="#" target="_blank" variant="h6">info@imtilak.net</Link>
								</div>

								<div className={classes.contact__item}>
									<LocationIcon className={classes.contact__item__icon} />
									<Typography>Başakşehir. Mall of Istanbul. Office Block. No.91. Istanbul, Turkey
									</Typography>
								</div>
							</div>

						</CardContent>
					</Card>
				</Box>

			</Grid>
		</Grid>
	);
}

export default Index;
