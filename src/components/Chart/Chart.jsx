import React, { useEffect } from 'react';
import styles from './Chart.module.css';
import { Bar } from 'react-chartjs-2';

const options = {
  legend: {
    display: false,
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0,
        },
      },
    ],
  },
  maintainAspectRatio: false,
};

const data = {
  labels: ['#1', '#2', '#3', '#4', '#5'],
  datasets: [
    {
      label: '코로나 차트',
      data: [1, 2, 3, 4, 5],
      backgroundColor: 'rgba(75,192,192)',
    },
  ],
};

const Chart = (props) => {
  return (
    <div className={styles.chart}>
      <Bar data={data} height={200} width={200} options={options} />
    </div>
  );
};

export default Chart;
