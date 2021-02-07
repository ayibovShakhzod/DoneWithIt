import { create } from 'apisauce';

const apiClient = create({
  baseURL: 'https://dry-wave-39196.herokuapp.com/api'
});

export default apiClient;
