import React, { useState, useRef } from "react";

// MUI Component
import { Box, Container, Typography } from "@material-ui/core";
import Input from '@material-ui/core/Input';
import Button from "@material-ui/core/Button";
import Portal from '@material-ui/core/Portal';
// MUI Out PKG
import ReactPhoneInput from 'react-phone-input-2'
// Styles
import 'react-phone-input-2/lib/style.css'
import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    textAlign: 'center',
    backgroundColor: theme.palette.primary.main,
    color: "white",
    width: '100%',
    fontSize: "18px",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: 'inherit',
      color: theme.palette.primary.main,
      border: "1px solid #9c344c",
      transition: "all .3s ease",
    },

  },
  root: {
    '& > *': {
      // marginBottom: theme.spacing(2),
      margin: "15px auto",
      display: 'block',
    },
  },
  title: {
    color: theme.palette.primary.main,
    paddingTop: "30px",
    fontWeight: 'bold',
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
   }
}));

function Index(props) {
  const classes = useStyles();
  const [show, setShow] = useState(false);
  const container = useRef(null);

  const handleClick = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <section className={classes.backBlock}>
      <Container
        maxWidth="lg"
        style={{ position: "relative", paddingBottom: "25px" }}
      >
        <Box
          style={{
            paddingTop: "30px",
          }}
          align={'center'}
        >
          <Box mb={2}>
            <Typography align={'center'} variant="h6">
              Let us contact you to help you
            </Typography>
            <Typography align={'center'}>Choose the best real estate
            </Typography>
          </Box>
          {
            show ? 'Add Your Problem' :
              (<Button
                variant="contained"
                className={classes.btn}
                onClick={handleClick}
              >
                Apply now
              </Button>)
          }


          {show ? (
            <Portal container={container.current}>

              <form className={classes.root} noValidate autoComplete="off">
                <Input required placeholder="Name" inputProps={{ 'aria-label': 'description' }} />
                <ReactPhoneInput
                  name="phoneNumber"

                  country={'tr'}
                  inputExtraProps={{
                    name: "phone",
                    required: true,
                    autoFocus: true
                  }}
                  value="90425652"
                  onChange={phone => console.log({ phone })}
                />
                <Input placeholder="E-mail" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Your problem..." inputProps={{ 'aria-label': 'description' }} />
                <Button
                  variant="contained"
                  className={classes.btn}
                  onClick={handleClick}
                >
                  Send
                </Button>
              </form>


            </Portal>
          ) : null}
          <div ref={container} />
        </Box>
      </Container>
    </section>
  );
}

export default Index;
