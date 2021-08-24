import React from 'react';
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

const Chart = ({ getcovidData }) => {
  const data = {
    labels: getcovidData.map((item) => item.Date.slice(0, 10)),
    datasets: [
      {
        label: '코로나 총 확진자 ',
        data:
          // getcovidData[0].Confirmed,
          // getcovidData[1].Confirmed,
          // getcovidData[2].Confirmed,
          // getcovidData[3].Confirmed,
          // getcovidData[4].Confirmed,
          getcovidData.map((item) => item.Confirmed),

        backgroundColor: 'rgba(75,192,192)',
      },
    ],
  };
  return (
    <div className={styles.chart}>
      <Bar data={data} height={200} width={200} options={options} />
    </div>
  );
};

export default Chart;
