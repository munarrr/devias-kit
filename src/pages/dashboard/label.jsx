import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
        barThickness: 14,
        maxBarThickness:100,
      label: '# of Red Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: '#1665D8',
    },
    {
        barThickness: 14,
        maxBarThickness:100,
      label: '# of Blue Votes',
      data: [2, 3, 20, 5, 1, 4],
      backgroundColor: '#EC4C47',
    },
  ],
}

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
}

const GroupedBar = () => (
  <div className="Bar">
    <Bar data={data} options={options} />
  </div>
)

export default GroupedBar;
