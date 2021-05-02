<template>
  <div class="down-arr">
    <img :src="down" />
    <img :src="down" />
    <img :src="down" />
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  computed: {
    down: function() {
      return require('../assets/imgs/down.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
img {
  display: block;
  animation: opacity 2.25s ease-in-out infinite;
}
img:nth-of-type(2) {
  animation-delay: 0.35s;
}
img:nth-of-type(3) {
  animation-delay: 0.7s;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
