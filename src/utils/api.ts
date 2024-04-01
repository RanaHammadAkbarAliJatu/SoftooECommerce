import axios from 'axios';
const baseURL = 'https://my-json-server.typicode.com/benirvingplt/products/';

const fetchData = async (comingUrl: string) => {
  const url = baseURL + comingUrl;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export {fetchData};
