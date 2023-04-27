import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const USERSPERPAGE = 3;

axios.defaults.baseURL = 'https://64341c2a1c5ed06c958f65a6.mockapi.io/folows/';

export const getUsers = async page => {
  try {
    const response = await axios.get(
      `tweets?page=${page}&limit=${USERSPERPAGE}`
    );
    return response.data;
  } catch (error) {
    Notify.failure(error);
  }
};

export const setUser = async correctedUser => {
  try {
    const response = await axios.put(
      `tweets/${correctedUser.id}`,
      correctedUser
    );
    return response.data;
  } catch (error) {
    Notify.failure(error);
  }
};
