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
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  img: {
    display: 'block',
    height: '97px',
    margin: '0 auto',
  },
  backBlock: {
    borderRadius: '8px',
    background: '#f6f6f6',
    flexGrow: 1,
    width: 'auto',
  },
  big__container: {
    padding: "10px 25px",
    display: 'flex',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  }
}));


function Index({
  text = 'text here',
  img = 'https://www.imtilak.net/assets/img/population-count.png',
}) {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <div className={classes.big__container}>

        <div>
          <Typography
            variant="h6"
            component="h3"
            align='center'
            className={classes.title}
          >
            {text}
          </Typography>

        </div>

        <div >
          <img
            className={classes.img}
            src={img} alt=""
          />
        </div>

      </div>

    </div>
  )
}

export default Index