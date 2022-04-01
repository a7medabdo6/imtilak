import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '200px',
    minWidth:'200px',
    margin: '30px 10px 10px 10px',
  },
}));

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip arrow enterTouchDelay={0} placement="top" title={value} >
      {children}
    </Tooltip>
  );
}


export default function RangeSlider(props) {
  const handleChange = (event, newValue) => {
    setValue(newValue);

  };
  const {
    title = 'newSlider',
    step = 1,
    min = 0,
    max = 100,
    unit = '',
    handler = handleChange
  } = props

  function valuetext(value) {
    return `${value} ${unit}`;
  }
  function valueLabelFormat(value) {
    return `${value} ${unit}`;
  }

  const classes = useStyles();
  const [value, setValue] = useState([min, max]);


  return (
    <div className={classes.root}>

      <Slider
        value={value}
        onChange={handler}
        ValueLabelComponent={ValueLabelComponent}
        valueLabelDisplay="on"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        valueLabelFormat={valueLabelFormat}
        step={step}
        min={min}
        max={max}
      />

      <Typography align='center' id="range-slider" gutterBottom>
        <Box sx={{
          fontWeight: "bold"
        }}>
          {title}
        </Box>
      </Typography>

    </div>
  );
}
