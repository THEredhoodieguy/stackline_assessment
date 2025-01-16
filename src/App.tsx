import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const STACKLINE_BLUE = "#0f2646"

const App: React.FC = () => {
  return (
    <div style={{margin: 0, padding: 0}}>
      <header ><img src='./stackline_logo.svg' /></header>
      <div className="container">
        <div className="left-pane"></div>
        <div className="right-pane">
          <div className='graph-panel'></div>
          <div className='table-panel'>{dataTable()}</div>
        </div>
      </div>
    </div>
  );
};

type WeekSaleDataPoint = {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

const data: [WeekSaleDataPoint] = [{weekEnding: "01-01-1995", retailSales: 0, wholesaleSales: 0, unitsSold: 0, retailerMargin: 0}]

function dataTable() {
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
          {data.map((row) => (
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope='row'>{row.weekEnding}</TableCell>
              <TableCell align='right'>{row.retailSales}</TableCell>
              <TableCell align='right'>{row.wholesaleSales}</TableCell>
              <TableCell align='right'>{row.unitsSold}</TableCell>
              <TableCell align='right'>{row.retailerMargin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default App;