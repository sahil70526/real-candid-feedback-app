import React from 'react'
import BaarChart from './components/chart-data/BaarChart';
import LineChart from './components/chart-data/LineChart';
import PieChartData from './components/chart-data/PieChartData';
import CustomerTableData from './components/table-data/CustomerTableData';


function App() {
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      <div>
      <CustomerTableData/>
      </div>
      <div>
      <BaarChart/>
      </div>
      <div>
      <LineChart/>

      </div>
      <div>
      <PieChartData/>
      </div>    
    </div>
  )
}

export default App