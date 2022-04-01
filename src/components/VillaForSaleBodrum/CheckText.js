import React from 'react'
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { Box, Typography } from '@material-ui/core';

function Index({ text = 'Text' }) {
 return (
  <Box sx={{
   display: 'flex',
   flex: '0 0 33.333333%',
  }}>

   <CheckBoxIcon />

   <Typography style={{
    marginLeft: '5px',
    fontWeight: 'lighter',
   }}>

    {text}

   </Typography>

  </Box>
 )
}

export default Index