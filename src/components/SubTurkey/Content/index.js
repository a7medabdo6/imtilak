import React, { useState } from 'react'
import PropTypes from 'prop-types';
// MUI Components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// Local Components
import SubProperties from './SubProperties'
import SubOverview from './SubOverview'
import SubRegionReport from './SubRegionReport'
// Common Components

function TabPanel(props) {
 const { children, value, index, ...other } = props;

 return (
  <div
   role="tabpanel"
   hidden={value !== index}
   id={`nav-tabpanel-${index}`}
   aria-labelledby={`nav-tab-${index}`}
   {...other}
  >
   {value === index && (
    <Box p={3}>
     <Typography>{children}</Typography>
    </Box>
   )}
  </div>
 );
}

TabPanel.propTypes = {
 children: PropTypes.node,
 index: PropTypes.any.isRequired,
 value: PropTypes.any.isRequired,
};

function a11yProps(index) {
 return {
  id: `nav-tab-${index}`,
  'aria-controls': `nav-tabpanel-${index}`,
 };
}

function LinkTab(props) {
 return (
  <Tab
   component="a"
   onClick={(event) => {
    event.preventDefault();
   }}
   {...props}
  />
 );
}

const useStyles = makeStyles((theme) => ({
 root: {
  backgroundColor: theme.palette.background.paper,
 },
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  margin: '20px 0',
 },
 big__container: {
  position: "relative",
  padding: "20px",
  // minWidth: '300px',
 },
 tabs: {
  borderRadius: '7px',
 },
 SingleTab: {
  padding: '0px',
  margin: '-10px',
 }
}));

function Content() {
 const classes = useStyles();
 const [value, setValue] = useState(0);

 const handleChange = (event, newValue) => {
  setValue(newValue);
 };

 return (

  <div className={classes.backBlock}>
   <div className={classes.big__container}>
    <div className={classes.root}>

     <AppBar className={classes.tabs} position="static">

      <Tabs
       variant="fullWidth"
       value={value}
       onChange={handleChange}
       aria-label="nav tabs example"
      >
       <LinkTab label="Properties" href="/#" {...a11yProps(0)} />
       <LinkTab label="Overview" href="/#" {...a11yProps(1)} />
       <LinkTab label="Region Report" href="/#" {...a11yProps(2)} />
      </Tabs>

     </AppBar>

     <TabPanel className={classes.SingleTab} value={value} index={0}>
      <SubProperties />
     </TabPanel>

     <TabPanel className={classes.SingleTab} value={value} index={1}>
      <SubOverview />
     </TabPanel>

     <TabPanel className={classes.SingleTab} value={value} index={2}>
      <SubRegionReport />
     </TabPanel>

    </div>
   </div>
  </div>
 );
}

export default Content