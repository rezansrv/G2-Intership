<template>
  <div>
    <signup />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import signup from "~/components/account/signUp.vue";

@Component({
  name: "sigvnup",
  components: {
    signup,
  },
  layout:"account"
})
export default class signUp extends Vue {
  // You can use the signup component here if needed
}
</script>
