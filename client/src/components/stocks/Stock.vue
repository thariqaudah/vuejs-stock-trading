<template>
  <div id="stock" class="col-sm-6 col-md-4 mt-4">
    <div class="card">
      <div class="card-header text-white bg-success">
        <h5 class="card-title">{{ stock.code }} <small>(Price: {{ stock.price }})</small></h5>
      </div>
      <div class="card-body">
        <h6 class="card-subtitle mb-2">{{ stock.name }}</h6>
        <!-- Buy input field -->
        <form>
          <div class="form-group">
            <label>Lot Amount</label>
            <input type="number" class="form-control" placeholder="Quantity" min="0" v-model.number="quantity">
          </div>
        </form>
        <button type="button" class="btn btn-success" @click="submitBuy" :disabled="quantity <= 0">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'stock',
  data() {
    return {
      quantity: null
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
      this.quantity = null;
      this.buyStock(order);
      console.log(order);
      // this.$emit('done-alert', order);
    }
  },
  props: {
    stock: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>