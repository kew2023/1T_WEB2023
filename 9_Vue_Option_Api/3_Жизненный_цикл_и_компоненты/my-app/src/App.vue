<template>
    <div class="app">
      <vMainWrapper></vMainWrapper>
    </div>

</template>

<script>
import vMainWrapper from '@/components/v-main-wrapper.vue'

export default {
  name: 'App',
  components: { vMainWrapper }
}
</script>

<style lang="scss">

@import url("~materialize-css/dist/css/materialize.min.css");

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
