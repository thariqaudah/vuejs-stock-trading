<template>
  <div id="app-navbar">
    <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand">Stock Trading</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Main menu -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ml-4">
            <router-link exact class="nav-link" :to="{name: 'home'}">Home</router-link>
          </li>
          <li class="nav-item ml-3">
            <router-link exact class="nav-link" :to="{name: 'portfolio'}">Portfolio</router-link>
          </li>
           <li class="nav-item ml-3">
            <router-link exact class="nav-link" :to="{name: 'stocks'}">Stocks</router-link>
          </li>
        </ul>

        <!-- Dropdown menu -->
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <span class="nav-link" style="color: white"><b>Funds: {{ funds | currency }}</b></span>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" @click="endDay">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">  
              <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
              <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import axios from 'axios';

export default {
  name: 'Header',
  computed: mapGetters({funds: 'getFunds', allStocks: 'allStocks', allPortfolio: 'allPortfolio'}),
  methods: {
    ...mapActions(['randomPrice', 'getData']),
    endDay() {
      this.randomPrice();
    },
    saveData() {
      const currentData = {
        funds: this.funds,
        stocks: this.allStocks,
        portfolio: this.allPortfolio
      }
      axios.put('https://stock-trading-app-39bd5.firebaseio.com/data.json', currentData)
    },
    loadData() {
      this.getData();
    }
  }
}
</script>

<style scoped>
  .router-link-active {
    background-color: #666;
    color: #000;
    padding: 0.55rem;
    border-radius: 10px;
  }
</style>