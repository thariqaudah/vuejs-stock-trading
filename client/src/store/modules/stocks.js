import stocks from '../../data/stocks';

const state = {
  stocks: []
};

const getters = {
  allStocks: state => state.stocks
}

const actions = {
  fetchStocks({commit}) {
    commit('initStocks', stocks);
  },
  randomPrice({commit}) {
    commit('randomizingPrice');
  }
}

const mutations = {
  initStocks: (state, stocks) => state.stocks = stocks,
  randomizingPrice: (state) => {
    state.stocks.forEach(stock => {
      stock.price = Math.round(stock.price * (1 + Math.random() - 0.5));
    })
  },
  setStocks: (state, stocks) => {
    state.stocks = stocks;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}