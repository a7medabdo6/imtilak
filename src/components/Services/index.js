import { Box, Container, Typography, Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import "react-multi-carousel/lib/styles.css";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

import Card from "@material-ui/core/Card";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import CardActionArea from "@material-ui/core/CardActionArea";
// MUI Hooks
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
	boxImage: {
		backgroundImage:
			"url('https://www.imtilak.net/uploads/city/8acbcb25df0abc00f0b0d136ad5970f85NX245.png')",
		backgroundSize: "cover",
		height: "535px",
		backgroundPosition: "right",
		borderRadius: "10px",
		position: "relative",
	},
	avatar: {
		// padding: "5px 16px",
		padding: "5px",
		backgroundColor: "white",
		border: "1px solid gray",
	},
	boxImagesmall: {
		backgroundImage:
			"url('https://www.imtilak.net/image/482/284/news/192cc38b273c4ec7c90c5501e3465f2a1mR579.jpg')",
		backgroundSize: "cover",
		backgroundPosition: "right",
		borderRadius: "10px",
		position: "relative",
	},
	parag: {
		//position: "absolute",
		lineHeight: "40px",
		color: "white",
		height: "100%",
		background: theme.palette.primary.main,
		margin: "0",
		padding: "15px",
		transition: "all 1s ease",
		cursor: "pointer",
	},
	btn: {
		color: theme.palette.primary.main,
		padding: "15px 25px",
		fontSize: "16px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "white",
			border: "1px solid white",
			transition: "all 1s ease",
		},
	},
	paragsmall: {
		position: "absolute",
		bottom: "0px",
		color: "white",

		width: "100%",
		height: "fit-content",
		fontSize: ".9rem",
		padding: ".5rem",
		background: "#000",
		opacity: ".5",
		textAlign: "center",
		margin: "0px",
	},
	span: {
		background: "#9c344c",
		padding: "8px",
		color: "white",
		display: "inline-block",
	},
	testimonial: {
		height: "550px",
	},
	root: {
		// width: "300px",
		height: "310px",
		backgroundColor: "#eee",
	},
	rootHor: {
		display: "flex",
		backgroundColor: "#eee",
		margin: "10px 0px 10px 0px",
	},
	details: {
		display: "flex",
		flexDirection: "column",
	},
	content: {
		flex: "1 0 auto",
		paddingBottom: "0px",
	},
	cover: {
		width: "151px",
		minWidth: "150px",
	},
	Header: {
		color: theme.palette.primary.main,
	},
	subColor: {
		color: theme.palette.primary.main,
	},
	knowMore: {
		backgroundColor: "white",
		padding: "5px 10px",
		borderRadius: "20px",
		"&:hover": {
			backgroundColor: theme.palette.primary.main,
			color: "white",
		},
	},
	hover: {
		color: "black",
		"&:hover": {
			color: theme.palette.primary.main,
		},
	},
	icons: {
		fontSize: "1.1rem;",
	},
}));

function Index(props) {
	const theme = useTheme();
	const isDesktop = useMediaQuery('(min-width:1210px)');
	const classes = useStyles();

	return (
		<section className="testimonial">
			<Container
				maxWidth="lg"
				style={{ position: "relative", paddingBottom: "25px" }}
			>
				<Box
					style={{
						paddingTop: "20px",
					}}
				>
					<Typography className={classes.Header} variant="h4">
						{" "}
						Imtilak Real Estate Services{" "}
					</Typography>
					<Typography
						style={{ marginInline: "0px", marginBlock: "10px", width: "80%" }}
					>
						<Typography>
							{" "}
							Interesting articles and news: documented information about the
							real estate market and daily life in Turkey, interesting topics
							for the real estate investor, provided to you by Imtilak Real
							Estate
						</Typography>
					</Typography>
				</Box>



				<Grid xs={12} md={12}
					style={{
						display: "flex"
					}}>

					{
						isDesktop ?

							<>

								<Grid item xs={5} md={5}>
									<Card
										variant="outlined"
										style={{ borderRadius: "10px", height: "100%" }}
									>
										<Box style={{ height: "100%" }}>
											<Typography className={classes.parag} variant="h2">
												<Typography
													style={{
														margin: "15px 0px",
														fontSize: "1.5rem",
														fontWeight: "bold",
													}}
												>
													Imtilak Real Estate
												</Typography>
												<Typography
													style={{
														margin: "auto",
														fontSize: ".9rem",
														fontWeight: "bold",
													}}
												>
													A big Turkish company, ranked in the forefront of real
													estate companies in Turkey, headquartered in Istanbul, has
													an office in Trabzon, has dealings in other cities within
													Turkey, and has agents in several Arab cities. In the course
													of its long care...
												</Typography>
												<Button
													variant="contained"
													color="secondary"
													className={classes.btn}
													style={{ position: "absolute", bottom: "7%", left: "6%" }}
												>
													Read More
												</Button>
											</Typography>
										</Box>
									</Card>
								</Grid>

								<Grid
									item
									xs={7}
									md={7}
									style={{ display: "flex", flexDirection: "column" }}
								>
									<Grid item xs={12} md={12} style={{ display: "flex" }}>
										<Grid item xs={4} md={4} style={{ margin: "10px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
										<Grid item xs={4} md={4} style={{ margin: "10px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
										<Grid item xs={4} md={4} style={{ margin: "10px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
									</Grid>
									<Grid item xs={12} md={12} style={{ display: "flex" }}>
										<Grid item xs={4} md={4} style={{ margin: "0px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
										<Grid item xs={4} md={4} style={{ margin: "0px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
										<Grid item xs={4} md={4} style={{ margin: "0px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
									</Grid>
								</Grid>

							</>
							:
							<>
								<Grid item xs={12}>

									<Grid item xs={12}>
										<Card
											variant="outlined"
											style={{ borderRadius: "10px", height: "230px" }}
										>
											<Box style={{ height: "100%" }}>
												<Typography className={classes.parag} variant="h2">
													<Typography
														style={{
															margin: "15px 0px",
															fontSize: "1.5rem",
															fontWeight: "bold",
														}}
													>
														Imtilak Real Estate
													</Typography>
													<Typography
														style={{
															margin: "auto",
															fontSize: ".9rem",
															fontWeight: "bold",
														}}
													>
														A big Turkish company, ranked in the forefront of real
														estate companies in Turkey, headquartered in Istanbul, has
														an office in Trabzon, has dealings in other cities within
														Turkey, and has agents in several Arab cities. In the course
														of its long care...
													</Typography>
													<Button
														variant="contained"
														color="secondary"
														className={classes.btn}
														style={{ position: "absolute", bottom: "10%", left: "6%" }}
													>
														Read More
													</Button>
												</Typography>
											</Box>
										</Card>
									</Grid>





									<Grid
										item
										xs={12}
										style={{ marginTop: '10px', display: "flex", flexDirection: "column" }}
									>
										<Grid item xs={12} md={12} style={{ display: "flex", flexWrap: 'wrap', gap:'10px 5px'}}>


											<Box style={{ width: "33%", flexGrow: 1, minWidth: '200px', position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>


											<Box style={{ width: "33%", flexGrow: 1, minWidth: '200px', position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>


											<Box style={{ width: "33%", flexGrow: 1, minWidth: '200px', position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>


											<Box style={{ width: "33%", flexGrow: 1, minWidth: '200px', position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>


											<Box style={{ width: "33%", flexGrow: 1, minWidth: '200px', position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>


											<Box style={{ width: "33%", flexGrow: 1, minWidth: '200px', position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>

										</Grid>

										{/* <Grid item xs={12} md={12} style={{ display: "flex" }}>
										<Grid item xs={4} md={4} style={{ margin: "0px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
										<Grid item xs={4} md={4} style={{ margin: "0px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
										<Grid item xs={4} md={4} style={{ margin: "0px 7px" }}>
											<Box style={{ width: "100%", position: "relative" }}>
												<Card
													className={classes.root}
													style={{ padding: "0px !important", marginInline: "8px" }}
												>
													<CardActionArea
														className={classes.root}
														style={{ padding: "0px !important" }}
													>
														<CardHeader
															avatar={
																<Avatar
																	aria-label="recipe"
																	className={classes.avatar}
																>
																	<img src="https://www.imtilak.net/assets/img/property-consulting-turkey.png"
																		alt='img'
																	/>
																</Avatar>
															}
														/>
														<CardContent
															className=""
															style={{ padding: "0px !important" }}
														>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "10px",
																	fontWeight: "bold",
																	fontSize: "13px",
																}}
																variant="p"
																color="primary"
																component="p"
															>
																Imtilak Real Estate Is Honored
															</Typography>
															<Typography
																style={{
																	marginTop: "0px",
																	marginBottom: "0px",
																	fontSize: "13px",
																}}
																variant="body2"
																color=""
																component="p"
															>
																Day After Day And Thanks To Our Competent And Friendly
																Staff, The Testimonials Of Our Dear Clients Increase
																And Reflect The Exceptional Services Provided By Our
																Company,
															</Typography>
														</CardContent>
													</CardActionArea>
												</Card>
											</Box>
										</Grid>
									</Grid> */}

									</Grid>






								</Grid>
							</>
					}

				</Grid>



			</Container>
		</section>
	);
}

export default Index;
