<template>
  <div class="animate__animated animate__fadeIn animate__delay 0.3s">
    <exercise/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import exercise from '~/components/courses/exercise.vue'


@Component({
  name: "det",
  components:
    {
      exercise
    },
  layout:"defaultLay"



})
export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
}
</script>
