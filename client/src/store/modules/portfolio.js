const state = {
  portfolio: [],
  funds: 1000000
}

const getters = {
  allPortfolio: (state, getters) => {
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
    if(record) {
      record.quantity += stockQuantity;
      record.cost = ((record.quantity * record.cost) + (stockQuantity * stockPrice)) / (record.quantity + stockQuantity);
    } else {
      state.portfolio.push({
        id: stockId,
        quantity: stockQuantity,
        cost: stockPrice
      })
    }
  },
  minusPortfolio: (state, {stockId, stockQuantity}) => {
    const record = state.portfolio.find(stock => stock.id === stockId);
    console.log(record.quantity);
    if(record) {
      if(stockQuantity <= record.quantity) {
        record.quantity -= stockQuantity;
      }
    }
    console.log(record.quantity);
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}