import React from 'react'
import CustomersData from '../data/customerData';
import { Line} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function LineChart() {
    const customerChartData={
        labels: CustomersData.map((data)=>data.month),
        datasets:[
            {
                label:"Number Of Customers Gained",
                data:CustomersData.map((data)=>data.noOfCustomersGained),
                backgroundColor: [
                    "rgba(75, 192, 192, 1)",
                    "orange",
                    "red",
                    "grey",
                    "purple",
                    "cyan",
                    "green",
                  ],
                  borderColor: "black",
                  borderWidth: 2,
        },
        {
            label:"Number Of Customers Lost",
            data:CustomersData.map((data)=>data.noOfCustomersLost),
            backgroundColor: [
                "rgba(75, 192, 192, 1)",
                "orange",
                "red",
                "grey",
                "purple",
                "cyan",
                "green",
              ],
              borderColor: "black",
              borderWidth: 2,
    },
        
        ]
    }
  return (
    <div style={{width:850}}>
        <h2>Line Chart For The Customers </h2>
     <Line data={customerChartData}/>
    </div>
  )
}

export default LineChart