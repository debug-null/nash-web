<template>
  <div class="poster-container" ref="postContainer">
    <video
      id="media"
      src="/images/mobile/start.m4v"
      preload
      loop
      ref="media"
    ></video>
    <a class="logo" href="./"></a>
    <div class="top">
      <h1>NASH METAVERSE</h1>
      <h2>CREATE YOUR UNIVERSE</h2>
    </div>

    <div class="content">
      <div class="module-one">
        <h4>WHAT IS NASH METAVERSE ?</h4>
        <div class="info">
          The Nash Metaverse is a Cross-Chain Decentralized Metaverse. Choose
          your own path, explore and create an infinitely evolving space
          Metaverse. Become a Captain and Experience the Exciting Competition.
          Earn by Participating in the Game and Contributing to the Ecosystem.
        </div>

        <div class="btn-box">
          <div class="btn yellow" @click="enter">
            ENTER
          </div>
          <div class="btn white" @click="buy">
            BUY NOW
          </div>
        </div>
      </div>

      <div class="module-two">
        <div class="public-title">
          WHAT IS HAPPENING IN NASH METAVERSE ?
        </div>
        <div class="events-box">
          <client-only>
            <swiper class="event-list" :options="eventOptions">
              <swiper-slide
                class="event-item flex"
                v-for="(item, i) in events"
                :key="i"
              >
                <p>{{ item.text }}</p>
              </swiper-slide>
            </swiper>
          </client-only>
        </div>
      </div>

      <div class="module-three nebula-gameplay_container">
        <div class="public-title">
          GAMEPLAY
        </div>
        <div class="container-box">
          <div class="container-box_content">
            <div class="left">
              <p>EXPLORE</p>
            </div>
            <div class="right">
              <p>Obtain your NASH spaceship NFT.</p>
              <p>Compete, Upgrade, Build, Create, and join Alliance.</p>
              <p>Earn income, Grow and Evolve with the Nash Metaverse.</p>
              <p>
                *In Nash Universe, a JUMP costs up to only 2 transactions. Less
                GAS fees.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="module-three nebula-create_container">
        <div class="container-box">
          <div class="container-box_content">
            <div class="left">
              <p>CREATE</p>
            </div>
            <div class="right">
              <p>Open and Transparent On-Chain Data to All Players.</p>
              <p>Own and Control your Personalized NASH Metaverse NFTs.</p>
              <p>
                Use NASH editor to Create Highly Interactive Applications and
                Games.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="module-four">
        <div class="space-container">
          <div class="public-title">
            SPACESHIP
          </div>
          <div class="space-list-box">
            <client-only>
              <swiper
                :options="spaceSwiperOption"
                class="swiper-space-box"
                ref="spaceSwiper"
              >
                <swiper-slide
                  class="swiper-space-item"
                  v-for="(item, i) in spaceList"
                  :key="i"
                >
                  <img class="swiper-img" :src="item.img" />
                </swiper-slide>
              </swiper>
            </client-only>

            <div class="prev btn" slot="button-prev"><</div>
            <div class="next btn" slot="button-next">></div>
          </div>

          <div class="space-bottom">
            <div class="attr-box">
              <img src="/images/mobile/attr-img.png" alt="" />
            </div>
            <div class="social">
              <a
                v-for="(item, i) in shareLinks"
                :key="i"
                :href="item.link"
                target="_blank"
              >
                <img :src="item.img" :alt="item.img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer"></div>
    <ShipName v-if="shipNameVisible" @mask="shipNameVisible = false" />
  </div>
</template>

<script>
import ShipName from "@/components/mobile/shipName";
export default {
  name: "PosterIndex",
  head() {
    return {
      script: [
        { src: "/js/rem.js" },
        { src: "/js/web3.min.js" },
        { src: "/js/ShipABI.js" },
        { src: "/js/buy.js" }
      ]
    };
  },
  components: { ShipName },
  data() {
    return {
      shipNameVisible: false,
      events: [
        { text: "April. 15. 5000 spaceships launched" },
        { text: "May 15th - NASH Metaverse First Playable" },
        { text: "COMING SOON - Competitive Mode" },
        { text: "COMING SOON - Planet NFT" },
        { text: "COMING SOON - Open Editor to Players" }
      ],
      shareLinks: [
        {
          link: "https://discord.gg/weX45CNp",
          img: "/images/mobile/discord.png"
        },
        {
          link: "https://t.me/joinchat/o9TnDUaHbYI4MjNl",
          img: "/images/mobile/telegram.png"
        },
        {
          link: "https://twitter.com/nashmetaverse",
          img: "/images/mobile/twitter.png"
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: "/images/mobile/m.png"
        }
      ],
      eventOptions: {
        direction: "vertical",
        loop: false,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        speed: 3000,
        slidesPerView: 5,
        centeredSlides: true
      },
      // 飞船轮播
      spaceList: [
        { img: "/images/mobile/board-1.png" },
        { img: "/images/mobile/board-2.png" },
        { img: "/images/mobile/board-3.png" }
      ],
      spaceSwiperOption: {
        observer: true,
        observeParents: true,
        loop: true,
        speed: 1000,
        slidesPerView: 1,
        centeredSlides: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev"
        }
      }
    };
  },
  methods: {
    enter() {
      let media = this.$refs.media;
      let poster = this.$refs.postContainer;
      media.play();
      media.addEventListener("play", function() {
        console.log("视频开始播放===》", media);
        poster.style.background = "initial";
      });
      // loop 模式下，不触发ended
      // media.addEventListener("ended", function() {
      //   console.log("视频播放结束===》", media);
      // });

      media.addEventListener(
        "timeupdate",
        function() {
          var timeDisplay;
          //用秒数来显示当前播放进度
          timeDisplay = Math.floor(media.currentTime);
          //当视频播放到 8s的时候做处理,也就是结束时，
          if (timeDisplay >= 8) {
            //处理代码
            window.location.href="https://ship.nashpt.co/new/"
          }
        },
        false
      );
    },
    buy() {
      this.shipNameVisible = true;
    }
  }
};
</script>
<style>
body {
  background-image: url("~static/images/mobile/bg.png"), url("/~staticimages/mobile/logo.png"),
    url("~static/images/mobile/events.png"), url("~static/images/mobile/events_line.png"),
    url("~static/images/mobile/module-three_explore.png"),
    url("~static/images/mobile/module-three_create.png")
      url("~static/images/mobile/space_station.png")
      url("~static/images/mobile/ship-name_bg.png");
  background-size: 0 0;
}
</style>

<style scoped lang="scss">
@import "~assets/scss/mobile/index.scss";
</style>
