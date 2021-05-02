<template>
  <div class="h-title">
    <img :src="line" />
    <div class="content">{{text}}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  },
  computed: {
    line: function() {
      return require('../assets/imgs/line.png')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.h-title img {
  display: block;
  transform: translate3d(30px,0,0);
  transition: .8s cubic-bezier(.5,.11,.17,1);
}
.h-title img.line-enter {
  transform: translate3d(0,0,0);
}
.h-title .content {
  font-size: 56px;
  line-height: 56px;
  font-family: ali-medium;
  font-weight: 500;
  color: transparent;
  transform: translate3d(-30px,0,0);
  transition: .8s cubic-bezier(.5,.11,.17,1);
}

.content.title-enter {
  transform: translateZ(0);
  color: #fff;
}
</style>
