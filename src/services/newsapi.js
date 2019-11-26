import Vue from 'vue';

export const getHeadlineNews = async ({ query = '' }) => {
  let queryParams = {};

  if (query) {
    queryParams = {
      ...queryParams,
      q: query
    };
  }

  try {
    return await Vue.axios.get('/top-headlines', {
      params: queryParams
    });
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const getNews = async ({ query = '' }) => {
  let queryParams = {};

  if (query) {
    queryParams = {
      ...queryParams,
      q: query
    };
  }

  try {
    return await Vue.axios.get('/everything', {
      params: queryParams
    });
  } catch (e) {
    console.error(e);
    return [];
  }
};
