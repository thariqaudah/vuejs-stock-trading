import Vue from 'vue';
import Vuex from 'vuex';
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

// register Vuex in Vue
Vue.use(Vuex);

// instantiate Vuex object
export const store = new Vuex.Store({
  modules: {
    stocks,
    portfolio
  }
});