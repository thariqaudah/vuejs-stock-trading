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
    // const maxDecrease = Math.random() * -1 * 0.25
    const maxIncrease = Math.floor(Math.random() * 1 * 10) / 100;
    commit('randomizePrice', maxIncrease);
  }
}

const mutations = {
  initStocks: (state, stocks) => state.stocks = stocks,
  randomizePrice: (state, amount) => {
    return state.stocks.forEach(stock => {
      return Math.round(stock.price * (1 + amount));
    })
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}