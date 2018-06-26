<template>
  <div class="container">
    <vue-particles
      :clickEffect="false"
      :particlesNumber="70"
      color="#dedede"
    />
    <div class="about">
      <h1 class="about__title">Full name: Sergey Ustinov</h1>
      <h2 class="about__skills">Front-end Developer</h2>
      <h2 class="about__skills">Location: Ukraine/Vinnitsa</h2>
      <div class="socials">
        <a class="socials__item" href="https://github.com/sun1ive" target="_blank"><i class="fab fa-github-square" /></a>
        <a class="socials__item" href="https://www.facebook.com/profile.php?id=100020126377860" target="_blank"><i class="fab fa-facebook-square" /></a>
        <a class="socials__item" href="https://www.youtube.com/sun1ive" target="_blank"><i class="fab fa-youtube-square" /></a>
      </div>
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
      'TypeScript',
      'Vuejs',
      'React',
      'HTML5',
      'CSS3',
      'Preprocessors: Stylus',
      'Webpack/Parcel/Gulp',
      'Unit-testing(jest/mocha/chai)',
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
  display flex
  justify-content center
  align-items center
  .socials
    text-align center
    &__item
      color lightblue - 20%
      font-size responsive 1.5rem 3rem
      transition .3s ease
      margin 1rem
      &:hover
        color lightblue - 50%
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
      margin-bottom .3rem
    &__skills
      font-size responsive 1rem 2rem
      margin .3rem 0
    li
      font-size responsive 1rem 1.2rem

@media (max-width 600px)
  .container
    .about
      width 80%
      &__title
        margin-top 3rem
</style>
