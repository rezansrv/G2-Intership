<!-- layouts/DefaultWithBackground.vue -->
<template>
  <div class="default-layout">
    <navbar/>
    <nuxt />
    <footerApp/>
  </div>
</template>



<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import navbar from "~/components/utils/navbar.vue";
import footerApp from "~/components/utils/footerApp.vue";

@Component({
  name: "def",
  components: {
    navbar,
    footerApp,

  },
  layout:"account"

})
export default class layout extends Vue {

}

</script>

<style scoped>

</style>
