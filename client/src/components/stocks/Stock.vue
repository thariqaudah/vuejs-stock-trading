<template>
  <div id="stock" class="col-sm-6 col-md-4 mt-4">
    <div class="card">
      <div class="card-header text-white bg-success">
        <h5 class="card-title">{{ stock.code }} <small>(Price: {{ stock.price | currency }})</small></h5>
      </div>
      <div class="card-body">
        <h6 class="card-subtitle mb-2">{{ stock.name }}</h6>
        <!-- Buy input field -->
        <form>
          <div class="form-group">
            <label>Quantity Amount</label>
            <input type="number" class="form-control" placeholder="Quantity" min="0" v-model.number="quantity" :class="{danger: insufficientFund}">
          </div>
          <button type="button" class="btn btn-success" @click="submitBuy" :disabled="quantity <= 0 || insufficientFund">
            {{ insufficientFund ? 'Not enough fund' : 'Buy' }}
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'stock',
  data() {
    return {
      quantity: null
    }
  },
  props: {
    stock: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['buyStock']),
    submitBuy() {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        stockQuantity: this.quantity
      }
      this.buyStock(order);
      this.quantity = null;
      // this.$emit('done-alert', order);
    }
  },
  computed: {
    ...mapGetters({funds: 'getFunds'}),
    insufficientFund() {
      return this.funds < this.stock.price * this.quantity;
    }
  }
}
</script>

<style scoped>
  .danger {
    border: 1px solid red;
  }
</style>