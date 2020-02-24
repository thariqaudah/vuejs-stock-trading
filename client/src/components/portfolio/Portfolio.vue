<template>
  <div id="portfolio">
    <div class="container">
      <div class="row">
        <app-stock-portfolio></app-stock-portfolio>
      </div>
    </div>
  </div>
</template>

<script>
import StockPortfolio from './StockPortfolio.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Portfolio',
  components: {
    appStockPortfolio: StockPortfolio
  },
  computed: mapGetters(['allPortfolio'])
}
</script>

<style>

</style>