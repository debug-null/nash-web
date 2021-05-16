<template>
  <div class="index-container">
    <Header />
    <Section />
    <Footer />
    <div class="buy-container"></div>

    <!-- buy now 悬浮按钮 -->
    <div class="buy-now">
      <div>BUY NOW</div>
      <img src="/images/web/icon-buyNow.png" alt="icon-buyNow.png" />
    </div>
  </div>
</template>
<script>
import Header from "@/components/web/header";
import Section from "@/components/web/section";
import Footer from "@/components/web/footer";

export default {
  name: "Index",
  head() {
    return {
      script: [
        { src: "./js/web3.min.js" },
        { src: "./js/ShipABI.js" },
        { src: "./js/buy.js" },
        { src: "./js/webRem.js" }
      ]
    };
  },
  components: { Header, Section, Footer },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
.index-container {
  min-width: 750px;
  width: 100%;
  height: 100%;
  background: url("/images/web/bg.png") no-repeat center center;
  background-size: cover;
  color: #fff;
  user-select: none;
  font-family: "ali-medium";
  overflow: hidden;

  .buy-now {
    position: fixed;
    z-index: 100;
    bottom: 15%;
    right: 4.375rem;
    width: 16.25rem;
    height: 5.125rem;
    border-radius: 2.5rem;
    overflow: hidden;
    cursor: pointer;
    div {
      position: absolute;
      z-index: 1;
      width: 16.25rem;
      height: 5.125rem;
      line-height: 5.125rem;
      border-radius: 2.5rem;
      background: #496dfd;
      box-shadow: -5px 0px 13px 0px rgba(1, 0, 53, 0.5);
      right: -300px;
      font-size: 1.8125rem;
      font-family: ali-bold;
      font-weight: bold;
      color: #ffffff;
      padding-left: 1.875rem;
      transition: all 0.5s;
    }
    img {
      position: absolute;
      z-index: 2;
      right: -0.4375rem;
      top: -0.6875rem;
      width: 6.5rem;
      height: 6.5rem;
    }
    &:hover {
      div {
        right: -30px;
      }
    }
  }
}
</style>
<style lang="scss">
.public-title {
  font-size: 3.5rem;
  color: #fff;
  font-family: ali-medium;
  position: relative;
  margin-bottom: 5rem;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 117px;
    height: 6px;
    background: url("/images/web/title-line.png") no-repeat center center;
  }
}
</style>
