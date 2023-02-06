import React from 'react'
import CustomersData from '../data/customerData';
import { Pie} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChartData() {
  const customerGainedChartData={
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
    ]
}
const customerLostChartdata={
  labels: CustomersData.map((data)=>data.month),
  datasets:[
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
    <div style={{display:'flex',flexDirection:'row'}}>
      <div>
        <h3> Pie Chart For Customer Gained</h3>
      <Pie data={customerGainedChartData}/>
      </div>
      <div>
      <h3> Pie Chart For Customer Lost </h3>
      <Pie data= {customerLostChartdata}/>
      </div>
    </div>
  )
}

export default PieChartData