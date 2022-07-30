import "./chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, Skeleton } from "@mui/material";
import { useState } from "react";
import useFetch from "../../core/hooks/useFetch";
import { getRevenuesByPeriod } from "../../services/api/actions";

const data = [
  { name: "January", Total: 0 },
  { name: "February", Total: 0 },
  { name: "March", Total: 0 },
  { name: "April", Total: 1600 },
  { name: "May", Total: 900 },
  { name: "June", Total: 1700 }
];

const Chart = ({ props, aspect, title }) => {
  const [period, setPeriod] = useState('Monthly');

  const [response, callback, isloading] = useFetch(getRevenuesByPeriod(period));
  
  const handlePerioChange = (e) =>{
    setPeriod(e.target.value)
    callback(getRevenuesByPeriod(e.target.value));

  };
  return (
    <div className="chart">
      
      <Box container justifyContent="space-between" gap={20}  display="flex">
      <div className="title">{title ?? `Ultimas ventas ${period == "Monthly" ? "mensuales": period == "Daily" ? "diarias" : "anuales"}`}</div>
      <FormControl size="small">
        <InputLabel id="period-label">Periodo</InputLabel>
        <Select
          labelId="period-label"
          id="period"
          value={period}
          onChange={handlePerioChange}
          autoWidth
          label="Periodo"
        >
          <MenuItem value={"Daily"}>Diario</MenuItem>
          <MenuItem value={"Monthly"}>Mensual</MenuItem>
          <MenuItem value={"Yearly"}>Anual</MenuItem>
        </Select>
      </FormControl>

      </Box>
      {!isloading ? (
        <ResponsiveContainer width="100%" aspect={aspect}>
          <AreaChart
            width={730}
            height={250}
            data={response?.payload?.data || []}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="period" stroke="gray" />
            <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
            <YAxis width={30} fontSize="10" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="totalRevenue"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#total)"
              activeDot={{ r: 8 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <>
          <Skeleton width={"100%"} /> 
          <Skeleton height={"10%"} widh={100} />
          <Skeleton width={"100%"}/>
        </>
      )}
    </div>
  );
};

export default Chart;
