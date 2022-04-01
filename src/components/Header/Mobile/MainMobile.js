import React from 'react'
// Styles
import { makeStyles } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import Card from "@material-ui/core/Card";
// Local Components
import DropdownLang from "../../utilis/dropdownLang";
import DropdownCurrency from "../../utilis/dropdownCurrency";
import DropdownUser from "../../utilis/dropdownUser";
import dropdownSandwitch from "../../utilis/dropdownSandwitch";
// Icons 
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

const useStyles = makeStyles(
  (theme) => ({
    main__header: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '40px',
      alignContent: 'center',
      padding: '10px 30px',
    },
    main__header__left: {
      display: 'flex',
      columnGap: '5px',
      height: '100%',
    },
    main__header__right: {
      display: 'flex',
      height: '100%',
    },
    parentCard: {
      borderRadius: '10px',
    },
    card: {
      padding: "5px 4px 2px 4px",
    },
    cardCall: {
      padding: "5px 5px 5px 5px",
    },
    hoverIcon: {
      cursor: "pointer",
      "&:hover": {
        color: theme.palette.primary.main,
      }
    }
  })
);
function MainHeader() {
  const classes = useStyles();

  return (
    <div className={classes.main__header}>
      <div className={classes.main__header__left}>

        <div>
          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownLang />
            </Box>
          </Card>
        </div>

        <div>
          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownCurrency />
            </Box>
          </Card>
        </div>

        <div>
          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.card}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <DropdownUser isMobile={true} />
            </Box>
          </Card>
        </div>

        <div>
          <Card variant="outlined" className={classes.parentCard}>
            <Box
              className={classes.cardCall}
              justifyContent="center"
              flexDirection="row"
              display="flex"
            >
              <PhoneInTalkIcon className={classes.hoverIcon} />
            </Box>
          </Card>
        </div>

      </div>
      <Box className={classes.main__header__right}>
        <img height='100%' src={'https://www.imtilak.net/assets/img/logos/h-en.png?v=1626688124'} alt='img' />
      </Box>
    </div >
  )
}

export default MainHeader