import axios from "axios";

const baseUrl = "https://api.themoviedb.org/3";

const getData = async (fetchData) => {
  const req = await axios.get(`${baseUrl}${fetchData}`);
  return req;
};

export default getData;
