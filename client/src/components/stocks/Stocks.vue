<template>
  <div id="stocks">
    <div class="container">
      <!-- Alert success buy -->
      <!-- <div class="row justify-content-center text-center mt-3" v-if="orderStatus.done">
        <div class="col-md-8">
          <div class="alert alert-success" role="alert">
            DONE! Success Buy {{ order.code }} ({{ order.quantity }} lot - Rp{{ order.price }})
          </div>
        </div>
      </div> -->

      <!-- Single stock component -->
      <div class="row">
        <app-stock v-for="stock in allStocks" :key="stock.id" :stock="stock"></app-stock>
      </div>
    </div>
  </div>
</template>

<script>
import Stock from './Stock.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Stocks',
  components: {
    appStock: Stock
  },
  data() {
    return {
      orderStatus: {}
    }
  },
  computed: {
    ...mapGetters(['allStocks'])
  },
  methods: {
    ...mapActions(['fetchStocks']),
    // onDoneAlert(order) {
    //   this.orderStatus = order;
    //   setTimeout(() => {
    //     this.orderStatus = {}
    //   }, 3000);
    // }
  },
  created() {
    this.fetchStocks();
  }
}
</script>

<style>

</style>