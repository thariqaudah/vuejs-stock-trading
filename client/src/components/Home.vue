<template>
  <div id="home">
    <div class="jumbotron mt-4">
      <h1 class="display-4">Stock Trading App</h1>
      <h3 class="lead">Your Funds: {{ funds | currency}}</h3>
      <p>Pick stock to buy on "Stocks" menu and sell your portfolio stocks on "Portfolio" menu. Let's start!</p>
      <router-link class="btn btn-primary btn-lg" :to="{name: 'stocks'}">Start Trading</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'home',
  computed: mapGetters({funds: 'getFunds'})
}
</script>

<style>

</style>