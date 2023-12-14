<template>
  <div>
  <Login/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Login from '~/components/account/logIn.vue';

  @Component({
    name: "LogIn",
    components: {
       Login
    },
    layout:"account"

  })
  export default class LogIn extends Vue {

    mounted(){
      console.log('base:',process.env.BASE_URL)
    }

  }
</script>
