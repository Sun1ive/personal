<template>
  <div class="nav">
    <router-link
      exact
      class="nav__item"
      to="/"
      exact-active-class="active"
    >Home</router-link>
    <router-link
      exact
      class="nav__item"
      to="/about"
      exact-active-class="active"
    >About</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>


<style lang="stylus" scoped>
.nav
  position absolute
  top 5%
  left 50%
  z-index 999
  transform translateX(-50%)
  &__item
    text-decoration none
    color #dedede
    font-size 2rem
    margin 0 1.5rem

.active
  color green
  border-bottom 2px solid currentColor
</style>
