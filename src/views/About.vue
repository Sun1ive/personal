<template>
  <div class="container">
    <vue-particles
      :clickEffect="true"
      color="#dedede"
    />
    <div class="about">
      <h1 class="about__title">Full name: Sergey Ustinov</h1>
      <h2 class="about__skills">Front-end Developer</h2>
      <h2 class="about__skills">Location: Ukraine/Vinnitsa</h2>
      <i class="fab fa-github-square">123</i>
      <h2 class="about__skills">Skills:</h2>
      <p>Front End</p>
      <ul>
        <li v-for="skill in frontEndSkills" :key="skill">{{ skill }}</li>
      </ul>
      <p>Back End</p>
      <ul>
        <li v-for="skill in backEndSkills" :key="skill">{{ skill }}</li>
      </ul>
      <p>Services</p>
      <ul>
        <li v-for="skill in services" :key="skill">{{ skill }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data: () => ({
    frontEndSkills: [
      'ES6+',
      'Type Script',
      'Flow a little',
      'Vuejs',
      'React',
      'HTML5',
      'CSS3',
      'Preprocessors: Stylus',
      'Webpack/Parcel/Gulp',
      'Unit-testing',
    ],
    backEndSkills: [
      'Nodejs',
      'Golang',
      'Express/Koa/Fastify',
      'MongoDB',
      'Sequelize ORM for SQL DBs',
      'RESTful APIs',
      'GraphQL a bit',
      'Websockets',
      'ejs/pug',
    ],
    services: ['Git', 'Docker', 'Linters(Eslint/TSlint/Flow)', 'CI: Travis', 'Linux'],
  }),
});
</script>


<style lang="stylus" scoped>
.container
  position relative
  width 100%
  max-width 100%
  height 100vh
  display flex
  justify-content center
  align-items center
  .about
    background #fafafa
    padding 1rem
    display grid
    justify-content center
    align-items center
    width 65%
    position absolute
    top 65%
    left 50%
    transform translate(-50%, -50%)
  &__title
    font-size responsive 1rem 2rem
    margin-top 5rem
    margin-bottom .3rem
  &__skills
    font-size responsive 1rem 2rem
    margin .3rem 0
  li
    font-size responsive 1rem 1.2rem

@media (max-width 600px)
  .about
    width 100%
    &__title
      margin-top 3rem
</style>
