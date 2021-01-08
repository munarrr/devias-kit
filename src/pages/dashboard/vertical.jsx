import React from 'react'
import { Bar } from '@reactchartjs/react-chart.js'

const data = {
  labels: ['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug','7 Aug','8 Aug','9 Aug'],
  datasets: [
    {
      barThickness: 14,
      maxBarThickness:100,
      label: '# of Votes',
      data: [34, 19, 56, 34,12, 23,24,25,26],
      backgroundColor: [
        '#1665D8',
        '#EC4C47',
        '#1665D8', 
        '#EC4C47',
        '#1665D8',
        '#EC4C47',
        '#1665D8',
        '#EC4C47',
        '#1665D8', 
      ],
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

const VerticalBar = () => (
    <Bar data={data} options={options}/>
)

export default VerticalBar;
