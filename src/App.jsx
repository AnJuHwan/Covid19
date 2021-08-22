import './App.css';
import Header from './components/Header/Header.jsx';
import Contents from './components/Contents/Contents.jsx';
import Chart from './components/Chart/Chart';
import { useEffect, useState } from 'react';

function App({ covidData }) {
  const [todaycovidData, setTodayCovidData] = useState([]);
  const [death, setDeath] = useState([]);
  const [recovered, setRecovered] = useState();

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() - 2;

  useEffect(() => {
    // 현재 확진자 총 수
    covidData
      .todayCases(year, month, day)
      .then((item) => setTodayCovidData(item));
  }, [covidData, year, month, day]);

  useEffect(() => {
    // 일일 사망자 수
    covidData
      .allCovidData()
      .then((item) => setDeath(item[item.length - 1].Deaths));

    // 완치자 : API가 최신 Recovered를 받지를 못함
    covidData.allCovidData().then((item) => {
      const length = item.length - 1;
      setRecovered(item[length].Recovered);
    });
  }, []);

  console.log('???');
  return (
    <>
      {todaycovidData && (
        <>
          <Header />
          <Contents
            todaycovidData={todaycovidData}
            death={death}
            recovered={recovered}
          />
          <Chart />
        </>
      )}
    </>
  );
}

export default App;
