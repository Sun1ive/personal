<template>
  <div v-if="isVisible" class="background">
    <div class="head">
      <h1 class="main__text slideUp">Sunlive</h1>
      <template class="main__text slideDown">
        <router-link tag="span" to="/about">View profile</router-link>
      </template>
    </div>
    <vue-particles
      :clickEffect="true"
      color="#dedede"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    isVisible: true,
  }),
  beforeDestroy() {
    this.isVisible = false;
  },
  beforeRouteLeave(to, from, next) {
    this.isVisible = false;
    next();
  },
});
</script>


<style lang="stylus" scoped>
#particles-js
  background-image url('../assets/bg.jpg')
  background-position center center
  background-size cover
  position relative
  min-height 100vh
  display flex
  justify-content center
  align-items center
.head
  position absolute
  top 50%
  left 50%
  z-index 555
  transform translate(-50%, -50%)
  .main__text,
  .main__text + *
    width 100%
    color #fff
    font-size responsive 1.5rem 5.5rem
    will-change opacity,font-size,padding
    transition .3s ease
    text-align center
    margin .5rem 0
    &:hover
      color #01f5fd
      cursor pointer
      transition .3s ease

</style>
