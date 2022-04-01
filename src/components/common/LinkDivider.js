/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// MUI Component
import Button from "@material-ui/core/Button";
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
// Styles
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({

  backBlock: {
    borderRadius: '8px',
    border: '1px solid #c5c5c5',
    background: '#fff',
    marginTop: '20px',
    backgroundColor: theme.palette.primary.main,

  },
  Link: {
    textDecoration: 'none',
    display: 'flex',
    margin: '25px',
    alignItems: 'center',
    flexFlow: 'row wrap',
    justifyContent: 'center',
  },
  text: {
    width: '45%',
    flexGrow: '1',
  },
  title: {
    color: 'white',
    marginBottom: '25px',
    fontSize: '1.25rem',
    fontWeight: 'lighter',
  },
  content: {
    color: 'white',
    fontSize: '1.25rem',
    fontWeight: 'lighter',

  },
  img: {
    width: '50%',
    flexGrow: '1',
  },
}));

function Index({ title = 'Title', content = 'content content content content content content content content content content content content content content ', img = 'https://www.imtilak.net/uploads/banners/5c9239f4951e7d329c79ec47d9bb479aVru238.png' }) {
  const classes = useStyles();

  return (
    <div className={classes.backBlock}>
      <a href="#" className={classes.Link}>
        <Box p={2}
          className={classes.text}
        >
          <Typography
            className={classes.title}
            variant='h5'
          >
            {title}</Typography>

          <Typography
            className={classes.content}
            variant='h6'
          >
            {content}</Typography>
        </Box>
        <img
          className={classes.img}
          src={img}
          alt="img" />
      </a>
    </div >
  );
}

export default Index;