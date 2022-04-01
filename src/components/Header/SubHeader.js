import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Item from "../utilis/Item";

function SubHeader() {
  return (
    <Box
      justifyContent="center"
      flexDirection="row"
      display="flex"
      style={{
        marginTop: "0px",
        marginBottom: "10px"
      }}
    >

      <Typography
        style={{ cursor: "pointer", margin: "5px", color: "#5f6670" }}
      >
        Home
      </Typography>

      <Item title="About imtilak" />
      <Item title="Turkey Properties" />
      <Item title="Turkish Citizenship" />

      <Typography
        style={{
          cursor: "pointer",
          margin: "5px",
          color: "#5f6670"
        }}
      >
        Resale
      </Typography>

      <Item title="Category four" />

      <Typography
        style={{ cursor: "pointer", margin: "5px", color: "#5f6670" }}
      >
        Imtilak Channel
      </Typography>

      <Typography
        style={{
          cursor: "pointer",
          margin: "5px",
          color: "#5f6670"
        }}
      >
        Faq
      </Typography>

      <Typography
        style={{
          cursor: "pointer",
          margin: "5px",
          color: "#5f6670"
        }}
      >
        Contact us
      </Typography>

    </Box>
  );
}

export default SubHeader;
