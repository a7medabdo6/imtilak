import React from 'react'
// MUI Component
import { Box, Container, Typography } from "@material-ui/core";
// Common Components
import Slider from '../common/Slider'
// Style Func MUI
import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  title: {
    fontWeight: 'bold',
    margin: '15px 0px 40px 0px',
  },
  margin: {
    height: '45px',
  },
  testimonial: {
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

function TypeFilterItem() {
  const classes = useStyles()

  return (
    <div className={classes.testimonial}>
      <Container
        maxWidth="lg"
        className={classes.big__container}

      >
        <Typography
          className={classes.title}
          align='center'
          variant="h6"
          display='block'
        >
          Price And Space

        </Typography>

        <Slider
          title={'Space'}
          step={2}
          min={40}
          max={1500}
          unit={'m'}
        />
        <div className={classes.margin} />
        <Slider
          title={'Price'}
          step={1000}
          min={40000}
          max={2000000}
          unit={' $'}
        />

      </Container>
    </div>)
}

export default TypeFilterItem