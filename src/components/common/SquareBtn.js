import React, { useState } from 'react'
import Btn from '@material-ui/core/Chip';

const initStyle = {
  margin: " 5px 5px",
  borderRadius: "2px",
  background: "#f2f2f2",
  border: 0,
  color: 'black',

}

const selectedStyle = {
  margin: " 5px 5px",
  borderRadius: "2px",
  background: "#f2f2f2",
  color: '#9c344c',
  fontWeight: 'bold',

}

function SquareBtn({ BtnName = 'clickm-me', selectable = true, linkTo = '#' }) {
  const [isSeleced, setIsSeleced] = useState(false)

  return (
    <>
      {selectable ? <Btn
        style={isSeleced ? selectedStyle : initStyle}
        label={BtnName}
        onClick={() => setIsSeleced(!isSeleced)}
        variant="outlined" size="medium" clickable color="primary"
      /> : <a href={linkTo}><Btn
        style={isSeleced ? selectedStyle : initStyle}
        label={BtnName}
        variant="outlined" size="medium" clickable color="primary"
      /></a>}
    </>

  )
}

export default SquareBtn