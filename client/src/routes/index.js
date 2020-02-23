import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../components/Home.vue';
import Portfolio from '../components/portfolio/Portfolio.vue';
import Stocks from '../components/stocks/Stocks.vue';

Vue.use(VueRouter);

// set up our routes
const routes = [
  { path: '/', component: Home, name: 'home' },
  { path: '/portfolio', component: Portfolio, name: 'portfolio' },
  { path: '/stocks', component: Stocks, name: 'stocks' }
]

// initialize VueRouter instance and export it
export const router = new VueRouter({
  routes,
  mode: 'history'
})