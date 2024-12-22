<template>
  <div id="app">
    <Layout>
      <Itinerary />
    </Layout>
  </div>
</template>

<script>
import Itinerary from './components/Itinerary.vue';
import Layout from '@/components/Layout';

export default {
  name: 'app',
  components: {
    Layout,
    Itinerary,
  },
};
</script>

<style>
html,
body {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
