<template>
  <div id="portfolio">
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-4 mt-4">
          <app-stock-portfolio></app-stock-portfolio>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StockPortfolio from './StockPortfolio.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Portfolio',
  computed: mapGetters(['allStockPortfolio']),
  components: {
    appStockPortfolio: StockPortfolio
  }
}
</script>

<style>

</style>