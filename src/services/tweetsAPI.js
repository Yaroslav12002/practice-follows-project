import axios from 'axios';

axios.defaults.baseURL = 'https://64341c2a1c5ed06c958f65a6.mockapi.io/folows/';

export const fetchTweets = async () => {
  try {
    const response = await axios.get(`tweets`);
    return response.data;
  } catch (error) {
    new Error('Not Found');
  }
};
