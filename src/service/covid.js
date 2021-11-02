import axios from 'axios';

class CovidData {
  async getCovidData(year, month, day) {
    const response = await axios
      .get(
        `https://api.covid19api.com/live/country/kr/status/confirmed/date/${year}-${month}-${day}T23:59:59Z`,
      )
      .then((item) => item.data);

    return response;
  }
}

export default CovidData;

// https://corona.lmao.ninja/v2/historical/S. Korea?lastdays=4
