import React, { useState } from "react";
// Local Components
import PropCard from './PropCard';
import LinkDivider from '../../common/LinkDivider';
import { Box, Typography } from '@material-ui/core';
import Dropdown from '../../common/LightDropList';
// Common Components
import SquareBtn from '../../common/SquareBtn';
// Styles
import { makeStyles } from "@material-ui/core/styles";

const colourOptions = [
  { value: 'LE', label: 'LE', isFixed: true },
  { value: 'Dollar', label: 'Dollar', isDisabled: true },
];

const useStyles = makeStyles((theme) => ({
  containerMagin: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    padding: '25px 15px',
  },
  sortBy: {
    fontWeight: '700',
    color: theme.palette.primary.main,
  },
  backBlock: {
    borderRadius: '8px',
    border: '1px solid #c5c5c5',
    background: '#fff',
    marginTop: '20px',
  },
}));

function SubProperties() {
  const [foundNO, setFoundNO] = useState(0);
  const classes = useStyles();

  return (
    <div>
      <Box sx={{
        display: "flex",
        paddingTop: "30px",
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0px 10px 10px 0',
        flexWrap: 'wrap',
      }}>

        <Box sx={{
          display: 'flex',
        }}>

          <Typography>Properties Found: {foundNO}</Typography>
        </Box>

        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
          <Typography variant='h6' className={classes.sortBy}>Sort By: </Typography>
          <SquareBtn selected={false} BtnName='Recently Added' />
          <SquareBtn selected={false} BtnName='Min' />
          <SquareBtn selected={false} BtnName='Max' />
        </Box>
        <Dropdown
          isMulti={false}
          name='Change Currency'
          options={colourOptions}
          marginY='10px 0'
          width= '200px'
          placeholder='Change Currency'
        />
      </Box>

      <Box sx={{
        padding: '0px',
        margin: '0px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {[...Array(12)].map(el =>
          <PropCard
            key={el}
            date={'4/2022'}
            img={''}
            title={'Yellekent Complex 631 - IMT'}
            location={['Kocaeli', 'DERİNCE']}
            type={'Apartments'}
            payment={'Cash'}
            description={'Apartments for sale in European Istanbul in the Kucukcekmece district and a suitable opportunity for Turkish citizenship in a distinguished investment location near the new Istanbul Canal at special prices. Contact us for more information.'}
            price={'57,000'}
          />)}
      </Box>

      <LinkDivider />

    </div >
  )
}

export default SubProperties