import axios from 'axios';

export const getData = ({ commit }) => {
  axios.get('https://stock-trading-app-39bd5.firebaseio.com/data.json')
    .then(res => {
      const stocks = res.data.stocks;
      const portfolio = {
        funds: res.data.funds,
        portfolio: res.data.portfolio
      }
      // commit every mutations
      commit('setStocks', stocks);
      commit('setPortfolio', portfolio);
    })
  }