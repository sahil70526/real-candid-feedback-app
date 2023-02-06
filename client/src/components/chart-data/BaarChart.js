import React from 'react'
import CustomersData from '../data/customerData';
import { Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function BaarChart() {
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
    <div style={{width:'50%',alignItems:"center"}}>
      <h2>Baar Chart For The Customers </h2>
     <Bar data={customerChartData}/>

    </div>
  )
}

export default BaarChart