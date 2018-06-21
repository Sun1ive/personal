<template>
  <div class="nav slideDown">
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
  top 0%
  left 50%
  z-index 999
  &__item
    text-decoration none
    color #dedede
    font-size responsive 1.2rem 2rem
    margin 0 1rem
    padding .5rem 1rem
    transition .5s ease

.active
  transition .5s ease
  color #01F5FD
  border-bottom 2px solid currentColor

.slideDown
  animation slideDown 1.5s linear forwards

@keyframes slideDown {
  from {
    transform translate(-50%, -50%)
  } to {
    top 5%
    transform translate(-50%, 0)
  }
}
</style>
