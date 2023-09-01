
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function UserSeasonChart() {


    const [users, setUsers]=useState([])


    
    useEffect(()=>{
         axios.get("https://vocab-master-server.vercel.app/users")
         .then(data =>{
              console.log(data.data);
              setUsers(data.data)
         })
    },[])

  return (
    <AreaChart
      width={500}
      height={400}
      data={users}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="season" />
      <YAxis />
      <Tooltip />
      <Area type="monotone" dataKey="season" stroke="#8884d8" fill="#8884d8" />
    </AreaChart>
  );
}