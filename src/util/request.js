/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export const fetchData = async (url) => {
  console.log('Crawling data...');
    // make http call to url
  const response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log('Error occurred while fetching data');
    return;
  }
  return response;
};
