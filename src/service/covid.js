import axios from 'axios';

class CovidData {
  todayCases(year, month, day) {
    const response = axios
      .get(
        `https://api.covid19api.com/country/kr/status/confirmed/live?from=${year}-${month}-${day}T00:00:00Z&to=${year}-${month}-${day}T00:00:01Z`,
      )
      .then((item) => item.data[0].Cases);

    return response;
  }

  async allCovidData() {
    const response = await axios
      .get('https://api.covid19api.com/dayone/country/kr')
      .then((item) => {
        return item.data.sort((data) => data.Data);
      })
      .catch((e) => e);

    return response;
  }
}

export default CovidData;
