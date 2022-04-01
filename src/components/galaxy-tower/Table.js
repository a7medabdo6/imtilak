import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#86263d",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#37404d",
    color: "white",
    "&:nth-of-type(odd)": {
      backgroundColor: "#37404d",
      color: "white !important",
    },
  },
}))(TableRow);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "83 M²", 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Number Of Rooms & Living Rooms</StyledTableCell>
            <StyledTableCell align="right">Spaces Start At </StyledTableCell>
            <StyledTableCell align="right">
              Number Of Bathrooms{" "}
            </StyledTableCell>
            <StyledTableCell align="right">Prices Start At</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell
                component="th"
                scope="row"
                style={{ color: "white" }}
              >
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: "white" }}>
                {row.calories}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: "white" }}>
                {row.fat}
              </StyledTableCell>
              <StyledTableCell align="right" style={{ color: "white" }}>
                {row.carbs}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
