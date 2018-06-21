<template>
  <div class="background slideUp">
    <h1 class="head">Sunlive.pro</h1>
    <vue-particles
      :clickEffect="true"
      color="#dedede"
    />
  </div>
</template>


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

.slideUp
  animation slideUp .5s forwards cubic-bezier(0,.11,0,.22)

@keyframes slideUp {
  from {
    transform translateY(2%)
    opacity 0
  } to {
    transform translateY(0)
    opacity 1
  }
}
</style>
