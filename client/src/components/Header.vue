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
            <a class="nav-link" href="#" @click="randomPrice">End Day</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Save & Load
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">  
              <a class="dropdown-item" href="#">Save Data</a>
              <a class="dropdown-item" href="#">Load Data</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Header',
  methods: mapActions(['randomPrice'])
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