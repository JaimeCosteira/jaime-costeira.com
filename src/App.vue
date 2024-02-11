<script setup>
import Landing from './views/Landing.vue'
import Introduction from './views/Introduction.vue'

</script>

<template>
  <Landing />
  <!-- <Introduction /> -->
  <canvas class="background"></canvas>
</template>

<style scoped>
.background {
  background-color: #00264d;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
}
</style>

<script>
window.onload = function() {
  Particles.init({
    selector: '.background',
    color: '#008fd1',
    connectParticles: true,
    responsive: [
    {
      breakpoint: 768,
      options: {
        maxParticles: 40,
      }
    }
  ]

  });
};
</script>