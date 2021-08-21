import './App.css';
import Header from './components/Header/Header.jsx';
import Contents from './components/Contents/Contents.jsx';
import Chart from './components/Chart/Chart';
import { useEffect, useState } from 'react';

function App({ covidData }) {
  const [todaycovidData, setTodayCovidData] = useState(0);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() - 1;
  useEffect(() => {
    covidData
      .todayCases(year, month, day)
      .then((item) => setTodayCovidData(item));
  }, [covidData]);

  return (
    <>
      {todaycovidData && (
        <>
          <Header />
          <Contents todaycovidData={todaycovidData} />
          <Chart />
        </>
      )}
    </>
  );
}

export default App;
