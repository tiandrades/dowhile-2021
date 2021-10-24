import axios from 'axios';

export const api = axios.create({
  baseURL: `http://PUT_YOUR_IP_ADDRESS_HERE:4000`,
});
