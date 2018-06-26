<template>
  <div id="app">
    <Toolbar />
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Toolbar from '@/components/Toolbar.vue';

export default Vue.extend({
  components: { Toolbar },
});
</script>


<style lang="stylus">
#app
  min-height 100vh
  max-width 100%
  display flex
  justify-content center
  align-items center
  flex-flow column
  .background
    width 100%

.fade-enter-active
  animation: slidePageIn 2s forwards
  animation-timing-function cubic-bezier(.8, -.5, .36, 1)
.fade-leave-active
  animation slidePageOut 1.5s forwards
  animation-timing-function cubic-bezier(.8, -.5, .36, 1)
.fade-enter, .fade-leave-to
  opacity 0
  transition 1s

@keyframes slidePageIn {
  0% {
    opacity 0
    transform translateY(-100%)
  } 50% {
    opacity 1
    transform translateY(10%)
  }
  } 100% {
    opacity 1
    transform translateY(0)
  }

@keyframes slidePageOut {
  0% {
    opacity 1
    transform translateY(0)
  } 100% {
    opacity 0
    transform translateY(10%)
  }
}
</style>
