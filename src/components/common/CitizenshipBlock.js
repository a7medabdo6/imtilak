/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
// MUI COmponent
import { Typography } from '@material-ui/core'
// Local Components
// Common Components
import NeedHelp from '../common/ShareBtns';
import { Button } from '@material-ui/core';
// Styles
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  buttnBtn: {
    display: 'block',
    padding: '20px 0',
    width: '100%',
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    textAlign: 'center',
    fontSize: '1.3rem',
    fontWeight: '800',
    borderRadius: '0px 0px 8px 8px',
  },
  img: {
    textAlign: 'center',
    height: '50%',
    width: '85%',
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  postContent: {
    fontSize: '16px',
    lineHeight: '1.5',
    color: theme.palette.primary.main,
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


function Index() {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <div className={classes.big__container}>

        <Typography
          variant="h6"
          component="h3"
          className={classes.postContent}
        >
          Properties for sale in Turkey, offered by the best real estate sale site, our services include: buying and selling real estate in Turkey, owning a property in Turkey from the best real estate companies in Turkey.
        </Typography>
        <img
          className={classes.img}
          src="https://www.imtilak.net/assets/img/turkish-passport.png" alt="" srcset="" />


      </div>
      <a
        className={classes.buttnBtn}
        href='#'
      >For More Details</a>
    </div>
  )
}

export default Index