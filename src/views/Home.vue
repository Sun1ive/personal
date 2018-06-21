<template>
  <div v-if="isVisible" class="background">
    <h1 class="head slideUp">Sunlive.pro</h1>
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
  transition .4s ease
  color #fff
  font-size responsive 1.5rem 5.5rem
  pointer-events none
  will-change opacity,font-size,padding
  transition .3s ease
  border-bottom 1px solid currentColor

</style>
