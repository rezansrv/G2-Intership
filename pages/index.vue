<template>
  <div>
    <hero/>
    <courses/>
  </div>
</template>

  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import hero from '~/components/landing/hero.vue'
  import courses from '~/components/courses/courses.vue'

  @Component({
    name: "signUp",
    components:
      {hero,
       courses
      },
    layout:"defaultLay"



  })
  export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
  }
  </script>
