<template>
  <div class="animate__animated animate__fadeIn animate__delay 0.3s">
    <detail/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import detail from '~/components/courses/detail.vue'


@Component({
  name: "det",
  components:
    {
      detail
    },
  layout:"defaultLay"



})
export default class Account extends Vue {
  mounted() {
    console.log('hi')
  }
}
</script>
