import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { SalesEntry } from "../types";


export function salesTable(entries: SalesEntry[]) {
  let i = 0;
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="sales data table">
        <TableHead>
          <TableRow>
            <TableCell>WEEK ENDING</TableCell>
            <TableCell align='right'>RETAIL SALES</TableCell>
            <TableCell align='right'>WHOLESALE SALES</TableCell>
            <TableCell align='right'>UNITS SOLD</TableCell>
            <TableCell align='right'>RETAILER MARGIN</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {entries.map((entry) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              key={i++}
            >
              <TableCell component="th" scope='row'>{entry.weekEnding}</TableCell>
              <TableCell align='right'>{entry.retailSales}</TableCell>
              <TableCell align='right'>{entry.wholesaleSales}</TableCell>
              <TableCell align='right'>{entry.unitsSold}</TableCell>
              <TableCell align='right'>{entry.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}