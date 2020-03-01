const state = {
  portfolio: [],
  funds: 1000000
}

const getters = {
  allPortfolio(state, getters) {
    return state.portfolio.map(singlePortfolio => {
      const record = getters.allStocks.find(stock => stock.id === singlePortfolio.id);
      return {
        id: singlePortfolio.id,
        code: record.code,
        name: record.name,
        price: record.price,
        quantity: singlePortfolio.quantity,
        cost: singlePortfolio.cost
      }
    })
  },
  getFunds(state) {
    return state.funds;
  }
}

const actions = {
  buyStock({ commit }, order) {
    commit('addPortfolio', order);
  },
  sellStock({commit}, order) {
    commit('minusPortfolio', order);
  }
}

const mutations = {
  addPortfolio: (state, {stockId, stockPrice, stockQuantity}) => {
    const record = state.portfolio.find(stock => stock.id === stockId);

    if (record) {
      record.cost = Math.round(((record.quantity * record.cost) + (stockQuantity * stockPrice)) / (record.quantity + stockQuantity));
      record.quantity += stockQuantity;
    } else {
      state.portfolio.push({
        id: stockId,
        quantity: stockQuantity,
        cost: stockPrice
      })
    }
    // Decrease funds by buy value
    state.funds -= stockPrice * stockQuantity;
  },
  minusPortfolio: (state, {stockId, stockPrice, stockQuantity}) => {
    const record = state.portfolio.find(stock => stock.id == stockId);
    
    if(record) {
      if(record.quantity > stockQuantity) {
        record.quantity -= stockQuantity;
      } else if(record.quantity == stockQuantity) {
        state.portfolio.splice(state.portfolio.indexOf(record), 1);
      }
      // Increase funds by sell value
      state.funds += stockPrice * stockQuantity;
    }
  },
  setPortfolio: (state, portfolio) => {
    state.portfolio = portfolio.portfolio;
    state.funds = portfolio.funds;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}