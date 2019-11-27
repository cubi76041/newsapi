import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

const newsApiKey = process.env.VUE_APP_NEWSAPI_KEY || '';
const newsApiBaseUrl = process.env.VUE_APP_NEWSAPI_API_BASE_URL || '';
const axiosInstance = axios.create({
  baseURL: newsApiBaseUrl,
  headers: {
    Authorization: `Bearer ${newsApiKey}`
  }
});
axiosInstance.interceptors.response.use(
  function(response) {
    if (response.data.status !== 'ok') {
      throw new Error(response.message);
    }
    return response.data;
  },
  function(error) {
    return Promise.reject(error);
  }
);

Vue.use(VueAxios, axiosInstance);
