<template>
  <div class="poster-container">
    <a class="logo" href="./"></a>
    <div class="top">
      <h1>NASH METAVERSE</h1>
      <h2>CREATE YOUR UNIVERSE</h2>
    </div>

    <div class="content">
      <h4>WHAT IS NASH METAVERSE ?</h4>
      <div class="info">
        WHAT IS NASH METAVERSE?<br />
        The Nash Metaverse is a Cross-Chain Decentralized Metaverse. Choose your
        own path, explore and create an infinitely evolving space Metaverse.
        Become a Captain and Experience the Exciting Competition. Earn by
        Participating in the Game and Contributing to the Ecosystem.
      </div>

      <div class="btn-box">
        <div class="tip">Purchase Successful！ Enter to Start！</div>
        <div class="btn yellow" @click="enter">
          ENTER
        </div>
        <div class="btn white" @click="buy">
          BUY NOW
        </div>
      </div>
    </div>

    <div class="bottom">
      <a v-for="(item, i) in shareLinks" :key="i" :href="item.link">
        <img :src="item.img" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "PosterIndex",
  head() {
    return {
      script: [{ src: "./js/rem.js" }]
    };
  },
  data() {
    return {
      shareLinks: [
        {
          link: "./",
          img: require("@/assets/imgs/poster/discord.png")
        },
        {
          link: "./",
          img: require("@/assets/imgs/poster/telegram.png")
        },
        {
          link: "./",
          img: require("@/assets/imgs/poster/twitter.png")
        },
        {
          link: "./",
          img: require("@/assets/imgs/poster/m.png")
        }
      ]
    };
  },
  methods: {
    enter() {
      alert("enter");
    },
    buy() {
      alert("buy");
    }
  }
};
</script>

<style lang="scss">
.poster-container {
  width: 100%;
  height: 100%;
  background: url("../../assets/imgs/poster/poster.png") no-repeat center center;
  background-size: cover;
  overflow: hidden;
  .logo {
    display: block;
    width: 6.875rem;
    height: 6.125rem;
    background: url("../../assets/imgs/poster/logo.png") no-repeat center center;
    background-size: cover;
    margin: 3.4375rem 0 0 3.4375rem;
  }
  .top {
    margin: 0 auto;
    padding: 0 13.75rem;
    text-align: center;
    padding-top: 20.625rem;
    color: #fff;
    h1 {
      font-size: 6rem;
      font-family: ali-medium;
      margin-bottom: 0.625rem;
      font-weight: normal;
    }
    h2 {
      font-size: 3.039375rem;
      font-family: ali-regular;
      font-weight: normal;
      text-justify: justify;
      text-align-last: justify;
      font-weight: normal;
    }
  }
  .content {
    padding: 0 13.75rem;
    margin: 0 auto;
    text-align: left;
    padding-top: 15.625rem;
    h4 {
      color: #ffd600;
      font-size: 2.8125rem;
      font-family: ali-medium;
      margin-bottom: 0.625rem;
    }
    .info {
      font-size: 1.875rem;
      color: #fff;
      font-family: ali-regular;
    }
    .btn-box {
      width: 27.8125rem;
      margin: 0 auto;
      margin-top: 10rem;

      .tip {
        font-size: 1.375rem;
        font-family: ali-regular;
        color: #fff;
        margin-bottom: 3.75rem;
        text-align: center;
        background-color: #000;
      }
      .btn {
        font-size: 2.8125rem;
        margin-bottom: 5rem;
        text-align: center;
        height: 8.125rem;
        line-height: 8.125rem;
        font-family: ali-bold;

        &.yellow {
          color: #000;
          background-color: #ffd522;
        }
        &.white {
          color: #000;
          background-color: #fff;
        }
      }
    }
  }

  .bottom {
    padding: 0 13.75rem;
    margin: 36.25rem auto 4.375rem auto;
    display: flex;
    justify-content: space-between;
    a {
      display: inline-block;
      width: 7.25rem;
      height: 7.0625rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
