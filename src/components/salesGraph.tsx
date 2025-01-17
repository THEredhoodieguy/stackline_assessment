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
      <LineChart data={entries} >
        <XAxis 
          dataKey="weekEnding" 
          tickFormatter={(date) => {
            const [year, month, day] = date.split('-');
            return months[parseInt(month, 10) - 1] + ' ' + day;
          }} 
        />
        <Tooltip />
        <Line type="monotone" dataKey="retailSales" stroke="#40a8ef" />
        <Line type="monotone" dataKey="wholesaleSales" stroke="#3c4858" />
      </LineChart>
    </ResponsiveContainer>
    </Card>
    
  )
}