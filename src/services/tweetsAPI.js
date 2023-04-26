import axios from 'axios';

const USERSPERPAGE = 3;

axios.defaults.baseURL = 'https://64341c2a1c5ed06c958f65a6.mockapi.io/folows/';

const fetchTweets = async page => {
  try {
    const response = await axios.get(
      `tweets?page=${page}&limit=${USERSPERPAGE}`
    );
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
};

export const getUsers = page => {
  return fetchTweets(page);
};
