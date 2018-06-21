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
    font-size responsive 1.2rem 2rem
    margin 0 1rem

.active
  transition .4s ease
  color #01F5FD
  border-bottom 2px solid currentColor
</style>
