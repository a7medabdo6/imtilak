import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Divider, Typography } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
 adRow: {
  display: 'flex',
  justifyContent: 'space-between',
  margin: '10px 0',
 },
 adRowLeft: {
  fontWeight: '700',
  fontSize: '1.2rem',
 },
 adRowRight: {
  fontSize: '1.2rem',
 }
}));

function AdInfoRow({
 label = 'Label',
 value = 'value',
 hasDivider = true,
}) {
 const classes = useStyles();

 return (
  <div>

   <div className={classes.adRow}>
    <typography className={classes.adRowLeft}>{label}</typography>
    <typography className={classes.adRowRight}>{value}</typography>
   </div>
   {hasDivider && <Divider />}

  </div>
 )
}

export default AdInfoRow