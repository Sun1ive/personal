<template>
  <div v-if="isVisible" class="background">
    <div class="head">
      <h1 class="main__text fadeIn">Sunlive</h1>
      <router-link
        class="main__text fadeIn"
        to="/about"
      >View profile</router-link>
    </div>
    <vue-particles
      :clickEffect="false"
      :particlesNumber="100"
      :lineLinked="false"
      shapeType="circle"
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
    text-decoration none
    &:hover
      color #01f5fd
      cursor pointer
      transition .3s ease

.fadeIn
  animation showFadeIn 5s ease

@keyframes showFadeIn {
  from {
    transform scale(0.5)
    opacity 0
  } to {
    opacity 1
    transform scale(1)
  }
}

</style>
