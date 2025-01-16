import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { SalesEntry } from "../types";
import { Card } from "@mui/material";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export function salesGraph(entries: SalesEntry[]) {
  return (
    <Card sx={{width: '100%', height: 300}}>
      <ResponsiveContainer width="100%" height={300}>
      <LineChart data={entries} 
      // width={1000} height={300}
      >
        <XAxis 
          dataKey="weekEnding" 
          tickFormatter={(date) => {
            const [year, month, day] = date.split('-');
            return months[parseInt(month, 10) - 1] + ' ' + day;
          }} 
          // ticks={["2017-01-01", "2017-02-01",  "2017-03-01", "2017-04-01", "2017-05-01", "2017-06-01", "2017-07-01", "2017-08-01", "2017-09-01", "2017-10-01", "2017-11-01", "2017-12-01",]}
        />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
      </LineChart>
    </ResponsiveContainer>
    </Card>
    
  )
}