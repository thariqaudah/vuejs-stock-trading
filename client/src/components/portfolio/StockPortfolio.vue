<template>
  <div id="stockPortfolio" class="col-sm-6 col-md-4 mt-4">
    <div class="card">
      <div class="card-header text-white bg-primary">
        <h5 class="card-title">{{ portfolio.code }} <small>(Price: {{ portfolio.price | currency }})</small></h5>
        <p>(Avg Cost: {{ portfolio.cost | filterNumber}} | Quantity: {{ portfolio.quantity }})</p>
      </div>
      <div class="card-body">
        <h6 class="card-subtitle mb-2">{{ portfolio.name }}</h6>
        <!-- Sell input field -->
        <form>
          <div class="form-group">
            <label>Quantity Amount</label>
            <input type="number" class="form-control" placeholder="Quantity" min="0" v-model.number="quantity" :class="{danger: insufficientQuantity}">
          </div>
          <button type="button" class="btn btn-danger" @click="submitSell" :disabled="insufficientQuantity">
            {{ insufficientQuantity ? 'Not enough quantity' : 'Sell'}}
          </button>
        </form>
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
        stockPrice: this.portfolio.price,
        stockQuantity: this.quantity
      }
      this.sellStock(order);
      this.quantity = null;
    }
  },
  computed: {
    insufficientQuantity() {
      return this.portfolio.quantity < this.quantity;
    }
  },
  filters: {
    filterNumber(value) {
      return 'Rp ' + value.toLocaleString('id-ID');
    }
  }
}
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>