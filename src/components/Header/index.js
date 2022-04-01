/* eslint-disable jsx-a11y/alt-text */
import React from "react";
// MUI Component
import Grid from '@material-ui/core/Grid';
import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
// Local COmponent
import MainHeader from "./MainHeader";
import SubHeader from "./SubHeader";
import MobileHeader from "./Mobile/Index"
// MUI Hooks
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Index() {
	const theme = useTheme();
	const isDesktop = useMediaQuery('(min-width:1100px)');

	return (
		<>
			{
				isDesktop ?
					<Box
						justifyContent="center" flexDirection="row" display="flex"
					>
						<Typography
							variant="h6"
							noWrap
						>
							<img src="https://www.imtilak.net/assets/img/logos/v-en.png" alt="img" />
						</Typography>

						<Box justifyContent="center" flexDirection="column" display="flex"
						>
							<MainHeader />
							<SubHeader />
						</Box>
					</Box>
					:
					<>
						<Grid item xs={12}>
							<MobileHeader />
						</Grid>
					</>
			}

		</>
	);
}

export default Index;
