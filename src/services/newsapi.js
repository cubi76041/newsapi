import Vue from 'vue';

export const getHeadlineNews = async ({
  query = '',
  country = 'US',
  pageSize = 10,
  page = 1
} = {}) => {
  const queryParams = {
    q: query,
    country,
    pageSize,
    page
  };

  const headlineNewsResponse = await Vue.axios.get('/top-headlines', {
    params: queryParams
  });

  return headlineNewsResponse.articles;
};

export const getNews = async ({
  query = '',
  country = 'US',
  pageSize = 10,
  page = 1
} = {}) => {
  const queryParams = {
    q: query,
    country,
    pageSize,
    page
  };

  const newsResponse = await Vue.axios.get('/everything', {
    params: queryParams
  });

  return newsResponse.articles;
};
