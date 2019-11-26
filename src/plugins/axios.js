import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const newsApiKey = process.env.NEWS_API_KEY || '';
const newsApiBaseUrl = process.env.NEWSAPI_API_BASE_URL || '';
const axiosInstance = axios.create({
  baseURL: newsApiBaseUrl,
  headers: {
    Authorization: `Bearer ${newsApiKey}`
  }
});

Vue.use(VueAxios, axiosInstance);
