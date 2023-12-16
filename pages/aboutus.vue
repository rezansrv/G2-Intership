<template>
  <div class="animate__animated animate__fadeIn animate__delay 0.3s">
    <aboutus/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import aboutus from '~/components/aboutus/aboutus.vue'


@Component({
  name: "signUp",
  components:
    {
      aboutus
    },
  layout:"defaultLay"



})
export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
}
</script>
