<template>
  <p>Home</p>
  </template>

  <script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component({
    name: "signUp",
    components: {},
    layout:"defaultLay"



  })
  export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
  }
  </script>
