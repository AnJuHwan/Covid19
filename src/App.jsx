import './App.css';
import Header from './components/Header/Header.jsx';
import Contents from './components/Contents/Contents.jsx';
import Chart from './components/Chart/Chart';
import { useEffect, useState } from 'react';

function App({ covidData }) {
  const [todaycovidData, setTodayCovidData] = useState(0);
  const [death, setDeath] = useState([]);

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate() - 2;

  useEffect(() => {
    covidData
      .todayCases(year, month, day)
      .then((item) => setTodayCovidData(item));

    covidData.todayDeaths().then((item) => setDeath(item));
  }, [covidData, year, month, day]);
  console.log(death);

  return (
    <>
      {todaycovidData & (death != []) && (
        <>
          <Header />
          <Contents todaycovidData={todaycovidData} death={death} />
          <Chart />
        </>
      )}
    </>
  );
}

export default App;
