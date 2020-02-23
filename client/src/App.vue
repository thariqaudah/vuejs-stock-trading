<template>
  <div id="app">
    <div class="container">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    appHeader: Header
  }
}
</script>

<style>
  body {
    padding: 30px;
  }
</style>
