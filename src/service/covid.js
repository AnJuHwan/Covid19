import axios from 'axios';

class CovidData {
  async todayCases(year, month, day) {
    const response = await axios
      .get(
        `https://api.covid19api.com/country/kr/status/confirmed/live?from=${year}-${month}-${day}T00:00:00Z&to=${year}-${month}-${day}T00:00:01Z`,
      )
      .then((item) => item.data[0].Cases);

    return response;
  }
}

export default CovidData;
