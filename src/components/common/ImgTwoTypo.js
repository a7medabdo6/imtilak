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
  img: {
    textAlign: 'center',
    height: '97px',
    marginRight: '25px'
  },
  title: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    marginBottom: '20px',
  },
  textContent: {
    fontWeight: 'bold',
    color: 'black',
  },
  backBlock: {
    borderRadius: '8px',
    border: '1px solid #c5c5c5',
    background: '#fff',
    width: '300px',
    flexGrow: 1
  },
  big__container: {
    padding: "10px 25px",
    display: 'flex',
    justifyContent: 'space-evenly', 
  }
}));


function Index({
  text = 'text here',
  value = 0,
  img = 'https://www.imtilak.net/assets/img/population-count.png',
}) {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <div className={classes.big__container}>

        <div>
          <img
            className={classes.img}
            src={img} alt=""
          />
        </div>

        <div>
          <Typography
            variant="h6"
            component="h3"
            align='center'
            className={classes.title}
          >
            {text}
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            align='center'
            className={classes.textContent}
          >
            {value}
          </Typography>
        </div>


      </div>

    </div>
  )
}

export default Index