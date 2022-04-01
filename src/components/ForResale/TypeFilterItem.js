import React from 'react'
// MUI Component
import { Container, Typography } from "@material-ui/core";
// Common Components
import LightDropList from '../common/LightDropList'
// Style Func MUI
import { makeStyles, alpha } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
 title: {
  fontWeight: 'bold',
  margin: '15px 0px 40px 0px',
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

const someData = [
 { value: 'isFixed', label: 'isFixed', isFixed: true },
 { value: 'isDisabled', label: 'isDisabled', isDisabled: true },
 { value: 'one', label: 'one', },
 { value: 'two', label: 'two', isFixed: true },
 { value: 'three', label: 'three' },
 { value: 'four', label: 'four' },
 { value: 'five', label: 'five' },
];

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
     Property Type

    </Typography>

    <LightDropList
     isMulti={true}
     marginY={'15px'}
     name={'Type'}
     options={someData}
     placeholder={'Choose type'}
    />
    <LightDropList
     isMulti={true}
     marginY={'15px'}
     name={'Type'}
     options={someData}
     placeholder={'Choose property sub-category'}
    />
   </Container>
  </div>
 )
}

export default TypeFilterItem