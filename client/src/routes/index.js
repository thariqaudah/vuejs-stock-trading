import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';

Vue.use(VueRouter);

// set up our routes
const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio }
]

// initialize VueRouter instance and export it
export const router = new VueRouter({
  routes,
  mode: 'history'
})