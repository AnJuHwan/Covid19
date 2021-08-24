import './App.css';
import Header from './components/Header/Header.jsx';
import Contents from './components/Contents/Contents.jsx';
import Chart from './components/Chart/Chart';
import { useEffect, useState } from 'react';

function App({ covidData }) {
  const [getcovidData, setGetCovidData] = useState();

  const date = new Date();
  const year = date.getFullYear();
  const month =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth;
  const day = date.getDate() - 5;
  useEffect(async () => {
    await covidData
      .getCovidData(year, month, day)
      .then((item) => setGetCovidData(item));
  }, [covidData, year, month, day]);
  console.log(getcovidData);
  console.log('렌더링');

  return (
    <>
      {getcovidData && (
        <>
          <Header />
          <Contents getcovidData={getcovidData} />
          <Chart getcovidData={getcovidData} />
        </>
      )}
    </>
  );
}

export default App;
