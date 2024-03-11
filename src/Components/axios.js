import axios from 'axios'
import { baseUrl } from '../Constants/Constatnt';

const instance = axios.create({
    baseURL: baseUrl
  });

  export default instance