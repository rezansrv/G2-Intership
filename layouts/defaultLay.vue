<!-- layouts/DefaultWithBackground.vue -->
<template>
  <div class="default-layout">
    <div class="background"></div>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultWithBackground',
};
</script>

<style scoped>
.default-layout {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
}

.background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: aqua;
  background-position: center center;
  filter: blur(8px); /* تعیین میزان blur موردنظر */
  z-index: -1;
}
</style>
