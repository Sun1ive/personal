<template>
  <div class="background slideUp">
    <vue-particles
      :particleOpacity="0.7"
      :particlesNumber="80"
      :particleSize="4"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      :linesWidth="1"
      :clickEffect="true"
      color="#dedede"
      shapeType="circle"
      linesColor="#dedede"
      hoverMode="grab"
      clickMode="push"
    />
  </div>
</template>


<style lang="stylus" scoped>
.background
  background-image url('../assets/bg.jpg')
  background-position center center
  background-size cover
  position relative

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
