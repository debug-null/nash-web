<template>
  <section>
    <div class="module-one">
      <h1>NASH METAVERSE</h1>
      <h2>CREATE YOUR UNIVERSE</h2>
      <div class="btn-box">
        <div class="btn yellow" @click="enter">
          EXPLOR
        </div>
      </div>
    </div>
    <div class="module-two"></div>
    <div class="module-three">
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

    <div class="module-four">
      <div class="public-title">
        GAMEPLAY
      </div>
      <div class="container-box nebula-gameplay_container">
        <div class="img-box">
          <img src="~static/images/web/explore-bg.png" alt="explore-bg.png" />
        </div>
        <div class="writing-box">
          <div class="title">
            Explore
          </div>
          <div class="writing">
            <p>Obtain your NASH spaceship NFT.</p>
            <p>Compete, Upgrade, Build, Create, and join Alliance.</p>
            <p>Grow and Evolve with the NASH Metaverse.</p>
          </div>
        </div>
      </div>

      <div class="container-box nebula-create_container">
        <div class="writing-box">
          <div class="title">
            Create
          </div>
          <div class="writing">
            <p>
              Open and Transparent On-Chain Data to All Players.<br />
              Own and Control your Personalized NASH Metaverse NFTs.<br />
              Use NASH editor to Create Highly Interactive Applications and
              Games.
            </p>
          </div>
        </div>
        <div class="img-box">
          <img src="~static/images/web/create-bg.png" alt="create-bg.png" />
        </div>
      </div>
    </div>

    <div class="module-five">
      <div class="public-title">
        SPACESHIP
      </div>

      <div class="space-container">
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

          <div class="prev btn" slot="button-prev">
            <img src="~static/images/web/icon-left-arrow.png" alt="" />
          </div>
          <div class="next btn" slot="button-next">
            <img src="~static/images/web/icon-right-arrow.png" alt="" />
          </div>
        </div>
      </div>
      <div class="space-info">
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
  </section>
</template>
<script>
export default {
  name: "Section",
  components: {},
  data() {
    return {
      events: [
        { text: "April. 15. 5000 spaceships Launched" },
        { text: "May. 15. Fisrt Playable – 1" },
        { text: "Jun. 21. Fisrt Playable – 2" },
        { text: "COMING SOON – HyperJump" },
        { text: "COMING SOON – PlantMaker" },
        { text: "COMING SOON – Galactic Alliances" },
        { text: "COMING SOON – Dyson Spheres" },
      ],
      eventOptions: {
        direction: "vertical",
        loop: true,
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
        { img: require("@/static/images/web/board-1.png") },
        { img: require("@/static/images/web/board-2.png") },
        { img: require("@/static/images/web/board-3.png") }
      ],
      spaceSwiperOption: {
        observer: true,
        observeParents: true,
        speed: 1000,
        loop: true,
        slidesPerView: 3,
        centeredSlides: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev"
        }
      },
      shareLinks: [
        {
          link: "https://discord.gg/Xz7fzbvB",
          img: require("@/static/images/mobile/discord.png")
        },
        {
          link: "https://t.me/nashprotocol",
          img: require("@/static/images/mobile/telegram.png")
        },
        {
          link: "https://twitter.com/nashmetaverse",
          img: require("@/static/images/mobile/twitter.png")
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: require("@/static/images/mobile/m.png")
        }
      ]
    };
  },
  computed: {},
  methods: {
    enter() {
      this.$emit("ClickEnter");
    }
  }
};
</script>
<style lang="scss" scoped>
section {
  .module-one {
    width: 47.5rem;
    margin: 0 auto;
    text-align: center;
    padding-top: 10.3125rem;
    color: #fff;
    h1 {
      font-size: 5.125rem;
      font-family: ali-medium;
      font-weight: normal;
    }
    h2 {
      font-size: 2.5rem;
      font-family: ali-regular;
      font-weight: normal;
      text-justify: justify;
      text-align-last: justify;
      font-weight: normal;
      letter-spacing: 0.5rem;
    }
    .btn-box {
      margin-top: 3.125rem;
      display: flex;
      justify-content: center;
      align-content: space-between;
      align-items: flex-end;
      .btn {
        font-size: 1.875rem;
        text-align: center;
        width: 17.5rem;
        height: 5rem;
        line-height: 5rem;
        font-family: ali-bold;
        cursor: pointer;
        &.yellow {
          color: #000;
          background-color: #ffd522;
          margin-right: 2.1875rem;
        }
        &.white {
          color: #000;
          background-color: #fff;
        }
      }
    }
  }
  .module-two {
    margin-left: 3.125rem;
    margin-top: 14.375rem;
    width: 57.875rem;
    height: 10.375rem;
    h4 {
      color: #ffd600;
      font-size: 1.875rem;
      font-family: ali-medium;
      margin-bottom: 0.625rem;
    }
    .info {
      font-size: 1.5rem;
      color: #fff;
      font-family: ali-regular;
    }
  }
  .module-three {
    margin-top: 11.875rem;
    .public-title {
      margin-left: 12.5rem;
    }
    .events-box {
      position: relative;
      width: 113.9375rem;
      height: 57.8125rem;
      margin: 0 auto;
      background: url("~static/images/web/events.png") no-repeat center center;
      background-size: cover;
      .event-list {
        width: 71.25rem;
        height: 33.125rem;
        overflow: hidden;
        position: absolute;
        top: 25%;
        left: 25%;
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0.3rem;
          width: 100%;
          height: 100%;
          background: url("~static/images/web/events_line.png") no-repeat left
            center;
        }

        .event-item {
          color: rgba(255, 255, 255, 0.6);
          font-family: ali-regular;
          position: relative;
          padding-left: 1.5625rem;
          transition: all 0.5s;

          &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 10px;
            width: 0.9375rem;
            height: 0.9375rem;
            border-radius: 50%;
            background-color: rgba(255, 255, 255, 0.6);
          }
          p {
            font-size: 1.625rem;
            transition: all 0.5s;
          }
        }
      }
    }
  }

  .module-four {
    margin-top: 11.875rem;
    .public-title {
      margin-left: 13.125rem;
    }
    .container-box {
      height: 28.75rem;
      position: relative;
      display: flex;
      .img-box {
        img {
          width: 60.375rem;
          height: 41.3125rem;
        }
      }
      .writing-box {
        margin-top: 8.75rem;
        padding-left: 2.1875rem;
        .title {
          font-size: 3.5rem;
        }
        .writing {
          font-size: 1.5rem;
          font-family: "ali-regular";
        }
      }
      &.nebula-create_container {
        margin-top: 15.9375rem;
        .img-box {
          flex: 1;
          img {
            width: 45.9375rem;
            height: 28.875rem;
          }
        }
        .writing-box {
          flex: 1;
          width: 36.875rem;
          margin-left: 9.625rem;
        }
      }
    }
  }

  .module-five {
    margin-top: 26.875rem;
    overflow: hidden;
    .public-title {
      margin-left: 12.8125rem;
    }

    .space-container {
      width: 100%;
      height: 73.5625rem;
      background: url("~static/images/web/space_station.png") no-repeat center
        center;
      background-size: cover;
      user-select: none;
      position: relative;
      overflow: hidden;
      .space-list-box {
        position: absolute;
        top: 38%;
        left: 0;
        width: 100%;
        z-index: 10;
        .swiper-space-box {
          width: 100%;
          text-align: center;
          overflow: initial !important;
          .swiper-space-item {
          }
          .swiper-img {
            max-width: 40.9375rem;
            height: 28.625rem;
            margin: 0 auto;
            transition: all 0.3s ease-in-out;
          }
        }
        .btn {
          width: 5.25rem;
          height: 5.25rem;
          line-height: 5.25rem;
          text-align: center;
          background-color: rgba(255, 255, 255, 0.6);
          position: absolute;
          color: #fff;
          z-index: 100;
          top: 20%;
          font-size: 3.125rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .prev {
          left: 3.125rem;
          img {
            width: 1.9375rem;
            height: 3.0625rem;
          }
        }
        .next {
          right: 3.125rem;
          img {
            width: 1.9375rem;
            height: 3.0625rem;
          }
        }
      }
    }

    .space-info {
      .social {
        width: 68.125rem;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        a {
          display: inline-block;
          width: 4.9375rem;
          height: 4.9375rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
.events-box .event-list .event-item.swiper-slide-active p {
  font-size: 1.875rem !important;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}

// 当前选中飞船，放大
.module-five
  .space-list-box
  .swiper-space-box
  .swiper-space-item.swiper-slide-active
  .swiper-img {
  transform: scale(1.2);
}
</style>
