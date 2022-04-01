/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box, Typography } from '@material-ui/core';
import React from 'react';
// MUI Components
import { makeStyles } from '@material-ui/core/styles';
// Local Components
// Common Components
import ShareBtns from '../../common/ShareBtns';
import SquareBtn from '../../common/SquareBtn';
// Styles
import './FixUL.css';

const useStyles = makeStyles((theme) => ({
  title: {
    fontWeight: '700',
    color: theme.palette.primary.main,
  },
  textContent: {
    fontSize: '1rem',
    color: '#37404d',
    marginBottom: '15px',
  },
  liContainer: {
    display: "flex",
    flexDirection: "column",
    padding: '0px !important',
    margin: '0px !important',
  },
  img: {
    width: '100%',
    margin: '10px auto',
  },
  normanText: {
    fontSize: '1rem',
  },
  boldText: {
    fontSize: '1rem',
    fontWeight: 'bold',
  },
}));

function SubOverview() {
  const classes = useStyles();

  return (
    <div>

      <Typography variant='h6' className={classes.title}>Sort By: </Typography>

      <div>
        <ul>

          <div
            className={classes.liContainer}
          >

            <li className='li-main'><a href='#advantages-buy'>Advantages for Buying Property in Turkey</a></li>
            <li className='li-main'><a href='#properties-for-sale'>Properties for Sale in Turkey</a>
              <ul>
                <li>
                  <a href='#real-estate-investment'>Real Estate Investment in Turkey</a>
                </li>
                <li>
                  <a href='#advantages-real-estate'>Advantages of real estate investment in Turkey</a>
                </li>
              </ul>
            </li>

          </div>

        </ul>


        <article id="advantages-buy">
          <Typography
            variant="h6"
            component="h2"
            className={classes.title}
          >
            Advantages for Buying Property in Turkey
          </Typography>

          <Typography
            variant="h6"
            component="h3"
            className={classes.textContent}
          >
            Turkey's real estate market is one of the most promising real estate markets in Europe, given Turkey's strategic location at the crossroads of Europe and the Middle East, its rich resources and its charming nature which is one of Turkey's most important attractions.
          </Typography>
        </article>


        <article id="properties-for-sale">
          <Typography
            variant="h6"
            component="h2"
            className={classes.title}
          >
            Properties for Sale in Turkey
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            className={classes.textContent}
          >
            country offers good opportunities for those wishing to settle, secure housing, and gainful investment by selling and buying properties in Turkey such as apartments, villas, land, farms, shops, commercial offices, stores and all kinds of commercial and residential properties.

            There are open and diverse options to invest in Turkey's 2021 real estate. Anyone who wants to own or invest can buy property in Turkey according to the available budget. Preferably, look for apartments for sale in distinctive neighborhoods or houses overlooking the sea, and there are those who prefer to buy land, which is already known to be included in the planning schemes of the cities or choosing apartments ready for housing and then sell at double prices, thus, these many options are pleasing, in addition to major urban projects which is really what distinguishes the properties of Turkey today.
          </Typography>
          <img className={classes.img} src="https://www.imtilak.net/uploads/property_types/image_1632297232_378klKpjYQXKaEgol6x6geIijD93AkIrRjDkZEj0.jpeg" alt="Img" />
        </article>


        <article id="real-estate-investment">
          <Typography
            variant="h6"
            component="h2"
            className={classes.title}
          >
            Real Estate Investment in Turkey
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            className={classes.textContent}
          >
            Real estate investment here has excellent opportunities, especially in light of the availability of properties in Turkey for sale at prices suitable for wide segments of investors, where the investor finds what he or she is looking for in Turkey’s various areas, such as coastal areas like Istanbul and Trabzon or other central cities.

            It is possible for the investor to have short or long term lease options, or even benefit from the resale profits of the property in Turkey, provided that he or she has the necessary long-term patience to pursue this type of investment in the immovable property. Real estate agents in Turkey, understand the real estate market in Turkey to the fullest and help the investor to choose the best Turkish property suitable for his needs for investment or even housing and stability.

            The investment in the real estate sector is very safe, especially the investment in Turkey's properties for sale. The rate of returns is stable. This has been evident in recent years after Turkey witnessed huge developments in its major urban projects, which, of course, reflected on the "Properties of Turkey" Services, facilities and infrastructure.
          </Typography>
          <img className={classes.img} src="https://www.imtilak.net/uploads/property_types/image_1632297292_1D2EmpjwpBOxG0TMhafp5LVdlFHRUzV85TPOQ35t.jpeg" alt="Img" />
        </article>


        <article id="advantages-real-estate">
          <Typography
            variant="h6"
            component="h2"
            className={classes.title}
          >
            Advantages of real estate investment in Turkey
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            className={classes.textContent}
          >
            There are many advantages granted by the Turkish government to anyone who wants to buy property in Turkey to foreigners looking for properties for sale in the region, in order to encourage them to choose the investment in Turkey; the most important of these advantages, to offer properties for sale Turkey at affordable prices, For real estate investors and then Turkish citizenship in accordance with specific legal controls in return for buying a property in Turkey.
          </Typography>
        </article>


        <article id="Tags">

        </article>

      </div>
      <Box>
        <Typography>
          Edited by: <span className={classes.boldText}>Imtilak Real Estate©</span>
        </Typography>
        <ShareBtns margin='15px 0' />
        <Typography
          variant='h5'
          className={classes.title}>
          Tags
        </Typography>
        {[...Array(6)].map(el => <SquareBtn
          key={el}
          BtnName='Tag element'
          selectable={false}
          linkTo='#'
        />)}
        
      </Box>
    </div>
  )
}

export default SubOverview