import React from "react";
// MUI Component
import { Box, Container, Typography } from "@material-ui/core";
// Styles
import { makeStyles } from "@material-ui/core/styles";
// Local Component 
import Checkbox from './CheckText'
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
 title: {
  color: theme.palette.primary.main,
  paddingTop: "20px",
  paddingBottom: "20px",
  fontWeight: 'bold',
 },
 subTitle: {
  color: '#000',
  paddingTop: "20px",
  paddingBottom: "10px",
  fontWeight: 'bold',
  fontSize: '16px',
 },
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  marginTop: '20px',
 },
 big__container: {
  position: "relative",
  paddingBottom: "25px",
 },
 sectionGroup: {
  display: 'flex',
  flexWrap: 'wrap',
  rowGap: '10px',
 }
}));

function Index(props) {
 const classes = useStyles();
 const { t, i18n } = useTranslation();

 return (
  <div className={classes.backBlock}>
   <Container
    maxWidth="lg"
    className={classes.big__container}
   >

    <Typography
     className={classes.title}
     variant="h6"
     align={`${i18n.language=="ar"?"right":"left"}`}
    >
     Additional Features
    </Typography>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Frontage
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="One" />
      <Checkbox text="Two" />
      <Checkbox text="Three" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Interior Properties
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="American Kitchen" />
      <Checkbox text="Furniture" />
      <Checkbox text="Painted" />
      <Checkbox text="Refrigerator" />
      <Checkbox text="Shower cabin" />
      <Checkbox text="Stove" />
      <Checkbox text="Air Conditioning" />
      <Checkbox text="Cellar" />
      <Checkbox text="Seramik Zemin" />
      <Checkbox text="Steel Door" />
      <Checkbox text="Terrace" />
      <Checkbox text="Washer" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      External Properties
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Camera System" />
      <Checkbox text="Water Pressure Tank" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Nearliness
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Grocery" />
      <Checkbox text="Mosque" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Transportation
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Minibusses" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Scene
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="City" />
      <Checkbox text="Nature" />
      <Checkbox text="Park & Green Field" />
      <Checkbox text="Sea" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Infrastructure
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Electric" />
      <Checkbox text="ADSL" />
      <Checkbox text="Cable TV" />
      <Checkbox text="Phone Line" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Environmental Features
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Restaurant" />
      <Checkbox text="Street Market" />
      <Checkbox text="Veterinary" />
      <Checkbox text="Village Clinic" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Social
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Open Air Swimming Pool" />
      <Checkbox text="Volleyball Field" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Residence Type
     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Garden Floor Duplex" />
      <Checkbox text="Garden Floor" />
      <Checkbox text="Detached Entry" />
     </Box>
    </div>


    <div>
     <Typography
      className={classes.subTitle}
      variant="h6"
      align={`${i18n.language=="ar"?"right":"left"}`}
     >
      Accessible Housing

     </Typography>
     <Box className={classes.sectionGroup} >
      <Checkbox text="Vehicle Parking Lot" />
      <Checkbox text="Wide Hallway" />
      <Checkbox text="Entrance / Ramps" />
     </Box>
    </div>


   </Container>
  </div >
 );
}

export default Index;