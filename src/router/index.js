import Vue from 'vue';
import VueRouter from 'vue-router';
import HeadlineNews from '@/views/HeadlineNews';
import News from '@/views/News';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: HeadlineNews
  },
  {
    path: '/news',
    name: 'news',
    component: News
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
