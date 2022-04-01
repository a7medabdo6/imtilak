import React from 'react'
// MUI COmponent
import { Typography } from '@material-ui/core'
// Local Components
// Common Components
import LikeReact from '../common/LikeReact'
import ShareBtns from '../common/ShareBtns'
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
 title: {
  color: theme.palette.primary.main,
  fontWeight: 'bold',
  marginBottom: '10px',
 },
 postContent: {
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#5f6670',

 },
 backBlock: {
  borderRadius: '8px',
  border: '1px solid #c5c5c5',
  background: '#fff',
  margin: '20px 0',
 },
 big__container: {
  position: "relative",
  padding: "25px",
 }
}));


function PostLike() {
 const classes = useStyles();

 return (
  <div className={classes.backBlock}>
   <div className={classes.big__container}>

    <Typography
     variant="h5"
     component="h2"
     className={classes.title}
    >
     Properties For Sale In Turkey 2022
    </Typography>

    <Typography
     variant="h6"
     component="h3"
     className={classes.postContent}
    >
     Properties for sale in Turkey, offered by the best real estate sale site, our services include: buying and selling real estate in Turkey, owning a property in Turkey from the best real estate companies in Turkey.
    </Typography>

    <LikeReact react={'Like'} margin={'15px 0px'} />
    <ShareBtns react={'Share'} margin={'15px 0px'} />

   </div>
  </div>
 )
}

export default PostLike