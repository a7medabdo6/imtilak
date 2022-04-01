import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// Local Components
// Common Components 
import Dropdown from '../../common/LightDropList'
import ImgTwoTypo from '../../common/ImgTwoTypo'
import ImgTypo from '../../common/ImgTypo'
import ToggleTwo from '../../common/ToggleTwo'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '250px',
    margin: '30px 10px 10px 10px',
  },
  titleOne: {
    fontWeight: 700,
    marginBottom: '1.5rem',
    fontSize: "1.25rem",
    color: '#37404d',
  },
  midSection: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-evenly',
    gap: '10px',
    marginBottom: '10px',
  },
  subMidSection: {
    display: 'flex',
    flexFlow: 'column wrap',
    flexGrow: 1,
  }
}));

function SubRegionReport() {
  const classes = useStyles();

  return (
    <div style={{ diplay: 'flex' }}>
      <Typography
        className={classes.titleOne}
        align='center'
        variant='h4'
      >
        Istanbul Region Report
      </Typography>

      <div
        className={classes.midSection}
      >
        <ImgTwoTypo
          text={'Average Age'}
          value={33}
          img={'https://www.imtilak.net/assets/img/population-count.png'}
        />
        <ImgTwoTypo
          text={'Population'}
          value={'15, 067, 713'}
          img={'https://www.imtilak.net/assets/img/population-average.png'}
        />
      </div>

      <div
        className={classes.midSection}
      >

        <ImgTypo
          text={'Civil status'}
          img={'./chart.png'}
        />
        <ImgTypo
          text={'Social statu'}
          img={'./chart.png'}
        />
      </div>

      <div
        className={classes.midSection}
      >

        <ImgTypo
          text={'Civil status'}
          img={'./chart.png'}
        />
        <ImgTypo
          text={'Social statu'}
          img={'./chart.png'}
        />
      </div>


      <div
        className={classes.midSection}
      >
        <Typography
          align='center'
          variant='h6'
        >
          Property prices
        </Typography>
      </div>

      <div
        className={classes.midSection}
      >
        <ToggleTwo />
        <ToggleTwo />
      </div>

      <div
        className={classes.midSection}
      >
        <ImgTypo
          text={'Social status'}
          img={'./chart.png'}
        />
      </div>

      <div
      className={classes.midSection}
     >
      <div
       className={classes.subMidSection}
      >


       <Typography
        className={classes.subTitle}
        align='center'
       >
        The most favorite cities for foreign investors
       </Typography>

       <div
        style={{
         display: 'flex',
         flexFlow: 'row nowrap',
         marginBottom: '10px',
        }}>

        <div style={{
         display: 'flex',
         gap: '10px 10px',
         flexGrow: 1,
         justifyContent: 'space-between'
        }} >

         <Dropdown />
         <Dropdown />
        </div>
       </div>

       <ImgTypo
        text={'Social status'}
        img={'./chart.png'}
       />




      </div>

      <div
       className={classes.subMidSection}
      >


       <Typography
        className={classes.subTitle}
        align='center'
       >
        The most favorite cities for foreign investors
       </Typography>

       <div
        style={{
         display: 'flex',
         flexFlow: 'row nowrap',
         marginBottom: '10px',
        }}>
        <div style={{
         display: 'flex',
         gap: '10px 10px',
         flexGrow: 1,
         justifyContent: 'space-between'
        }} >

         <Dropdown />
         <Dropdown />
        </div>
       </div>

       <ImgTypo
        text={'Social status'}
        img={'./chart.png'}
       />
      </div>

     </div>

    </div >
  )
}

export default SubRegionReport