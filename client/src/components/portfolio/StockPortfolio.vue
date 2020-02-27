<template>
  <div id="stockPortfolio" class="col-sm-6 col-md-4 mt-4">
    <div class="card">
      <div class="card-header text-white bg-primary">
        <h5 class="card-title">{{ portfolio.code }} <small>(Price: {{ portfolio.price }})</small></h5>
        <p>(Avg Cost: {{ portfolio.cost }} | Quantity: {{ portfolio.quantity }})</p>
      </div>
      <div class="card-body">
        <h6 class="card-subtitle mb-2">{{ portfolio.name }}</h6>
        <!-- Sell input field -->
        <form>
          <div class="form-group">
            <label>Lot Amount</label>
            <input type="number" class="form-control" placeholder="Quantity" min="0" v-model.number="quantity">
          </div>
        </form>
        <button type="button" class="btn btn-danger" @click="submitSell">Sell</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'StockPortfolio',
  data() {
    return {
      quantity: null
    }
  },
  props: {
    portfolio: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['sellStock']),
    submitSell() {
      const order = {
        stockId: this.portfolio.id,
        stockQuantity: this.portfolio.quantity,
        stockPrice: this.portfolio.price
      }
      this.quantity = null;
      this.sellStock(order);
    }
  }
}
</script>

<style>

</style>