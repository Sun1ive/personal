<template>
  <div id="app">
    <Toolbar />
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from '@/components/Toolbar.vue';

export default Vue.extend({
  components: { Toolbar },
});
</script>


<style lang="stylus">
#app
  min-height 100vh
</style>
