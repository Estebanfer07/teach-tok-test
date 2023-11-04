import axios from 'axios';
import {API_BASE_URL} from '@env';

const axiosController = new AbortController();
export const codeService = axios.create({
  baseURL: API_BASE_URL,
  signal: axiosController.signal,
});
