<template>
  <div>
  <Login/>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Login from '~/components/account/LogIn.vue';

  @Component({
    name: "Logmin",
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
