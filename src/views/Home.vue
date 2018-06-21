<template>
  <div class="background">
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
  background-image url('https://www.imore.com/sites/imore.com/files/images/ga/imore-background.jpg')
  background-position center center
  background-size cover
  position relative
</style>
