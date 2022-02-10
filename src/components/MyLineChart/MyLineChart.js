import React from 'react';
import './MyLineChart.css'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
   
  } from "recharts";
  
  const data = [
    {
      name: "Jan",
      sell: 70,
      Price: 2400,
      item: 100
    },
    {
      name: "Feb",
      sell: 150,
      Price: 1398,
      item: 150
    },
    {
      name: "Mar",
      sell: 200,
      Price: 9800,
      item: 200
    },
    {
      name: "Apr",
      sell: 222,
      Price: 3908,
      item: 250
    },
    {
      name: "May",
      sell: 206,
      Price: 4800,
      item: 300
    },
    {
      name: "Jun",
      sell: 300,
      Price: 3800,
      item: 350
    },
    {
      name: "Jul",
      sell: 390,
      Price: 4300,
      item: 400
    },
    {
      name: "Aug",
      sell: 330,
      Price: 4300,
      item: 500
    },
    {
      name: "Sep",
      sell: 380,
      Price: 4300,
      item: 1000
    }
  ];
  
const MyLineChart = () => {
    return (
        <div>

            <div className='chart1 mt-4'>
            
            <LineChart
              width={350}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
           <h1>chart 1</h1>
           
            
              </div>
            <div className="chart2 mt-5">
            <LineChart
              width={500}
              height={200}
              data={data}
              syncId="anyId"
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="sell" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
          
           
            </div>

        </div>
    );
};

export default MyLineChart;