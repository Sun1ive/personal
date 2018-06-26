<template>
  <div class="nav slideDown">
    <router-link
      v-for="(navItem, index) in navList"
      :key="index"
      :to="navItem.path"
      exact
      class="nav__item"
      exact-active-class="active"
    >{{ navItem.title }}</router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    navList: [
      { title: 'Home', path: '/' },
      { title: 'About', path: '/about' },
      { title: 'Portfolio', path: '/portfolio' },
    ],
  }),
});
</script>


<style lang="stylus" scoped>
.nav
  width 100%
  height 50px
  z-index 10
  display flex
  justify-content center
  position absolute
  top 0
  left 50%
  transform translateX(-50%)
  &__item
    text-decoration none
    color #dedede
    font-size responsive 1.2rem 2rem
    margin 0 .2rem
    padding .5rem 1rem
    transition .5s ease

.active
  transition .5s ease
  color #01F5FD
  border-bottom 2px solid currentColor

.slideDown
  animation slideDown 2.5s ease forwards

@keyframes slideDown {
  from {
    opacity 0
    transform translate(-50%, -50%)
  } to {
    opacity 1
    top 5%
    transform translate(-50%, 0)
  }
}
</style>
