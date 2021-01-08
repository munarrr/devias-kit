import React from 'react'
import { Pie } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['Red', 'Blue', 'Yellow',],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3,],
      backgroundColor: [
        '#1070CA',
        '#F7D154',
        '#EC4C47',
      ],
      borderColor: [
       '#1070CA',
       '#F7D154',
       '#EC4C47',
      ],

      borderWidth: 1,
    },
  ],
}

const PieChart = () => (
  <div className="pie">
    <Pie className="pie"  data={data} />
  </div>
)

export default PieChart;
