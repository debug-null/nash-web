<template>
  <div class="home">
    <!-- 吸顶导航 -->
    <div class="flex-hbc" :class="[isShowNav? 'nav-fixed' : 'nav-bar']" :style="{ top: isShowNav ? '0' : ''}">
      <div class="nav-left flex-hbc">
        <img :src="logo" />
        <ul class="flex-hbc">
          <li v-for="(item, i) in navLeft" :key="i">{{ item.text }}</li>
        </ul>
      </div>
      <ul class="nav-right flex-hbc">
        <li class="flex-hbc" v-for="(item, i) in navRight" :key="i">
          <img :src="item.icon" />
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
    <!-- buy now 悬浮按钮 -->
    <div class="buy-now" @click="handleBuy">
      <div>BUY NOW</div>
      <img :src="buy" alt="" />
    </div>
    <!-- 弹窗 -->
    <div class="buy-modal" v-if="isShowModal" @click="handleClose">
      <div class="buy-modal-inner" @click.stop>
        <img :src="logoI" alt="">
        <div class="modal-title">SHIP</div>
        <div class="name-input">
          <input type="text" v-model="spaceName" placeholder="Enter NAME" />
        </div>
        <div v-loading="isLoading" class="check-btn" @click="handleCheckName">CHECK NAME</div>
      </div>
    </div>
    <!-- 向下翻页箭头动画 -->
    <down-arr v-show="isShowArr" class="show-more" />
    <section class="top-part" :style="{ height: bodyHeight + 'px' }">
      <video class="top-video" muted autoplay poster>
        <source src="https://web.ccpgamescdn.com/aws/eveonline/videos/reign-splash.mp4" type="video/mp4">
        <source src="https://web.ccpgamescdn.com/aws/eveonline/videos/reign-splash.webm" type="video/webm">
      </video>
      <div class="top-content">
        <div class="center-desc">
          <h1>NASH MEATAVERSE</h1>
          <p>MAKE YOUR UNIVERSE</p>
          <div class="top-btns flex-hc">
            <div class="enter-btn"><span>ENTER</span></div>
            <div class="guest-btn"><span>GUEST</span></div>
          </div>
        </div>
        <div class="what-is">
          <h1>WHAT IS NASH METAVERSE ?</h1>
          <p>
            NASH METAVERSE is a blockchain Metaverse MMO game, an evolving game
            universe.
          </p>
          <p> With its first game NASH UNIVERSE, players can obtain
            spaceships, gather NASHICAL to </p>
          <p>upgrade spaceships and JUMP in space to win resources.</p>
          <p>Enter Nash Universe, create the most valuable
            collection.</p>
        </div>
      </div>
      <img class="mask-up" :src="maskUp" />
    </section>
    <!-- 事件部分 -->
    <section class="event-part">
      <img class="mask-down" :src="maskDown" />
      <h-title style="margin-top: 94px;" class="title event-title" text="WHAT IS HAPPENING IN NASH METAVERSE ?" />
      <div class="event-list">
        <img class="v-line" :src="vline"  />
        <swiper class="event-swiper" ref="event" :options="eventOptions" @slideChange="handleSwiperChange">
          <swiper-slide
            class="event-slide"
            v-for="(item, i) in events" :key="i"
          >
            <div class="event-item flex">
              <div></div>
              <p>{{item.text}}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>
    <!-- GAME PLAY -->
    <section class="game-part">
      <h-title class="title" style="margin-top: 116px" text="GAMEPLAY" />
      <div class="game-play ltr">
        <img class="jump-img" :src="jump" />
        <div class="">
          <h1>Jump</h1>
          <p>
            Player JUMPs to approach the planet with resources
            (NASHICAL/crypto/NFT) spotted in Nash Universe.
          </p>
          <p>
            Make sure to park the spaceship within its radar range. Once the
            spaceship stops flying, it will begin automatically to gather
            resources on the planet.
          </p>
          <p>
            *JUMP, i.e. time and location changes cost NASHICAL. *In Nash
            Universe, a JUMP costs up to only 2 transactions. Less GAS fees.
          </p>
        </div>
      </div>
      <div class="game-play rtl">
        <div class="">
          <h1>Trade</h1>
          <p>Design your own spaceships and trade with other players.</p>
          <p>Build your exclusive fleet.</p>
          <p>Cross-blockchain transfers of any Nash Metaverse NFTs.</p>
        </div>
        <img class="nft-img" :src="nft" />
      </div>
    </section>
    <section class="space-part">
      <h-title
        class="title"
        style="margin-top: 200px; margin-bottom: 300px"
        text="SPACESHIP"
      />
      <div class="swiper-part">
        <swiper ref="spaceSwiper" :options="swiperOption">
          <swiper-slide
            class="swiper-box flex-vc"
            v-for="(item, i) in spaceList"
            :key="i"
          >
            <img class="swiper-img" :src="item.img" />
          </swiper-slide>
        </swiper>
        <div class="prev" slot="button-prev"></div>
        <div class="next" slot="button-next"></div>
      </div>
      <div class="props">
        <img :src="props" class="fadeout" />
        <p class="fadeout">
          5 properties can all be upgraded to create unique spaceships.The
          exterior changes with upgrades. *Upgrades cost NASHICAL.
        </p>
      </div>
    </section>
    <section class="foot-part">
      <el-row type="flex" justify="center">
        <el-col :span="20">
          <h-title text="PARTENERS" />
          <div class="flex-hb part-list">
            <div :style="{ backgroundImage: `url(${item.img})` }" v-for="(item, i) in parteners" :key="i"></div>
          </div>
        </el-col>
      </el-row>
      <h3 class="follow fadeout">FOLLOW NASH METAVERSE</h3>
      <div class="flex-hc fadeout">
        <div @mouseover="handelEnterBrand(i)" @mouseleave="handelLeaveBrand(i)" class="brand-icon" v-for="(item, i) in brands" :key="i">
          <img :src="item.icon" alt="" />
          <div v-if="item.isActive" class="brand-desc">{{item.title}}</div>
        </div>
      </div>
      <el-row class="bottom-menu fadeout">
        <el-col :xl="6" :lg="6" :md="6" :sm="12" :xs="24" v-for="item in menus" :key="item.type">
          <div class="menu-inner">
            <h4 class="type-name">{{ item.type }}</h4>
            <ul class="menu-list">
              <li v-for="subItem in item.list" :key="subItem.text">
                {{ subItem.text }}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row>
      <div class="game-info">
        <p>NASH METAVERSE is a blockchain meta-universe MMO game.</p>
        <p>
          Every player owns a spacecraft, In NASH METAVERSE, every player has
          the chance to become the greatest captain. In NASH METAVERSE, players
          can cross
        </p>
        <p>
          thousands of planetary systems and participate in activities
          with thousand other players, by battle, trade and exploration.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import HTitle from "@/components/HTitle";
import DownArr from "@/components/DownArr";

export default {
  head () {
    return {
      script: [
          { src: './js/web3.min.js' },
          { src: './js/ShipABI.js' },
          { src: './js/buy.js' },
      ]
    }
  },
  components: {
    HTitle,
    DownArr,
  },
  async asyncData({ app }) {
    const ip = await app.$axios.$get('http://icanhazip.com')
    return { ip }
  },
  data() {
    return {
      isShowModal: false,
      isLoading: false,
      spaceName: '',
      bodyHeight: 0,
      isShowNav: false,
      isShowArr: false,
      navLeft: [
        { text: "ABOUT", link: '' },
        { text: "EVENTS", link: '' },
        { text: "SPACESHIP", link: ''  },
        { text: "GAMEPLAY", link: ''  },
        { text: "PARTENERS", link: ''  },
      ],
      navRight: [
        { text: "LOGIN", icon: require("@/assets/imgs/login-i.png") },
        { text: "EN", icon: require("@/assets/imgs/lang-i.png") },
      ],
      events: [
        { text: 'April. 15.5000 spaceships' },
        { text: 'April. 13.5000 spaceships' },
        { text: 'April. 14.5000 spaceships' },
        { text: 'April. 12.5000 spaceships' },
        { text: 'April. 10.5000 spaceships' },
      ],
      eventOptions: {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false
        },
        speed: 1000,
        slidesPerView: 5,
        centeredSlides: true,
      },
      swiperOption: {
        loop: true,
        speed: 1000,
        // autoplay: {
        //   delay: 5000,
        //   disableOnInteraction: false
        // },
        slidesPerView: 3,
        centeredSlides: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
          disabledClass: "my-button-disabled",
        },
      },
      spaceList: [
        { img: require('@/assets/imgs/test1.png') },
        { img: require('@/assets/imgs/test1.png') },
        { img: require('@/assets/imgs/test1.png') },
        { img: require('@/assets/imgs/test1.png') },
        { img: require('@/assets/imgs/test1.png') },
      ],
      parteners: [
        { img: '', link: '' },
        { img: '', link: '' },
        { img: '', link: '' },
        { img: '', link: '' },
        { img: '', link: '' },
        { img: '', link: '' },
        { img: '', link: '' },
        { img: '', link: '' },
      ],
      menus: [
        {
          type: "PLAY ONLINE",
          list: [
            { text: "Play for Free", link: "" },
            { text: "Download the Game", link: "" },
            { text: "Add Game Time", link: "" },
            { text: "System Requirements", link: "" },
            { text: "Starter Guide for Beginners", link: "" },
          ],
        },
        {
          type: "CURRENT PLAYERS",
          list: [
            { text: "Account Management", link: "" },
            { text: "Support", link: "" },
            { text: "Mobile App", link: "" },
            { text: "Community", link: "" },
            { text: "Forums", link: "" },
            { text: "Developers", link: "" },
            { text: "Recruit a Friend", link: "" },
            { text: "Return to NASH", link: "" },
            { text: "Partnership Program", link: "" },
          ],
        },
        {
          type: "NASH UNIVERSE",
          list: [
            { text: "ASH:Valkyrie", link: "" },
            { text: "Gunjack", link: "" },
            { text: "Gunjack 2", link: "" },
            { text: "Nash Fanfest", link: "" },
            { text: "Nash Merchandise", link: "" },
            { text: "Nash Ship Models", link: "" },
            { text: "Project Discovery", link: "" },
          ],
        },
        {
          type: "SITE INFO",
          list: [
            { text: "About CCP", link: "" },
            { text: "Terms of Service", link: "" },
            { text: "Privacy Policy", link: "" },
            { text: "Contact Us", link: "" },
            { text: "RSS Feed", link: "" },
          ],
        },
      ],
      brands: [
        { icon: require('@/assets/imgs/facebook-i.png'), title: 'facebook', isActive: false, link: '' },
        { icon: require('@/assets/imgs/twitter-i.png'), title: 'twitter', isActive: false, link: '' },
        { icon: require('@/assets/imgs/youtube-i.png'), title: 'youtube', isActive: false, link: '' },
        { icon: require('@/assets/imgs/twitch-i.png'), title: 'twitch', isActive: false, link: '' },
        { icon: require('@/assets/imgs/instagram-i.png'), title: 'instagram', isActive: false, link: '' },
        { icon: require('@/assets/imgs/vk-i.png'), title: 'vk', isActive: false, link: '' },
      ]
    };
  },
  computed: {
    logo: function() {
      return require("@/assets/imgs/logo.png");
    },
    logoI: function() {
      return require("@/assets/imgs/logo-i.png");
    },
    buy: function() {
      return require("@/assets/imgs/buy-i.png");
    },
    props: function() {
      return require("@/assets/imgs/prop-icon.png");
    },
    jump: function() {
      return require("@/assets/imgs/jump.png");
    },
    nft: function() {
      return require("@/assets/imgs/nft.png");
    },
    vline: function() {
      return require("@/assets/imgs/v-line.png");
    },
    maskUp: function() {
      return require("@/assets/imgs/mask-up.png");
    },
    maskDown: function() {
      return require("@/assets/imgs/mask-down.png");
    },
  },
  methods: {
    handelEnterBrand(index) {
      this.brands = this.brands.map((o, i) => {
        if (index == i) {
          o.icon = require(`@/assets/imgs/${o.title}.png`)
          o.isActive = true
        }
        return o
      })
    },
    handelLeaveBrand(index) {
      this.brands = this.brands.map((o, i) => {
        if (index == i) {
          o.icon = require(`@/assets/imgs/${o.title}-i.png`)
          o.isActive = false
        }
        return o
      })
    },
    handleBuy() {
      // todo  buy now
      this.isShowModal = true
    },
    handleClose() {
      this.isShowModal = false
    },
    async handleCheckName() {
      this.isLoading = true
      const res = await nameAvailable(this.spaceName)
      console.log(res, 'handleCheckName')
      if (res) {
        const ret = await buyShip(this.spaceName)
        console.log(ret, 'after buy')
        this.$message({
          iconClass: 'aaa',
          message: 'Purchase Successful！ Enter to Start！',
          // duration: 0,
        });
      }
      this.isLoading = false
    },
    handleSwiperChange() {
      // const i = this.$refs.event.$swiper.activeIndex
      // Array.from(document.querySelectorAll('.event-item')).map((o, index) => {
      //   if (index == i+2) {
      //     o.querySelector('p').classList.add('active')
      //     o.querySelector('div').classList.add('active')
      //   } else {
      //     o.querySelector('p').classList.remove('active')
      //     o.querySelector('div').classList.remove('active')
      //   }
      // })
    },
    onScroll() {
      const scrtop =
        document.documentElement.scrollTop | document.body.scrollTop;
      this.isShowArr = scrtop < 30
      this.isShowNav = scrtop > 160


      Array.from(document.querySelectorAll('.fadeout')).map(o => {
        const top = o.getBoundingClientRect().top
        if (top < this.bodyHeight && !o.classList.contains('fadein')) {
          o.classList.add('fadein')
        }
      })
      Array.from(document.querySelectorAll(".h-title")).map((o) => {
        const top = o.getBoundingClientRect().top;
        if (top < this.bodyHeight) {
          const content = o.querySelector('.content')
          const img = o.querySelector('img')
          !content.classList.contains("title-enter") && content.classList.add("title-enter")
          !img.classList.contains("line-enter") && img.classList.add("line-enter")
        }
      });
      Array.from(document.querySelectorAll(".game-play")).map((o) => {
        const top = o.getBoundingClientRect().top;
        if (top < this.bodyHeight) {
          !o.classList.contains("fade-right") && o.classList.add("fade-right")
        }
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  mounted() {
    this.bodyHeight = document.documentElement.clientHeight || window.innerHeight;
    const scrtop = document.documentElement.scrollTop | document.body.scrollTop;
    this.isShowArr = scrtop < 30
    this.isShowNav = scrtop > 160
    window.addEventListener("scroll", this.onScroll);
  },
};
</script>
<style scoped>
.fadeout {
  opacity: 0;
  transform: translateY(15px);
  transition: all .6s ease-in-out;
}
.fadein {
  opacity: 1;
  transform: translateY(0px);
}
.home {
  position: relative;
  min-width: 700px;
}
.buy-modal {
  position: fixed;
  z-index: 2000;
  top: 0;
  bottom:0;
  left:0;
  right: 0;
  background: rgba(0,0,0,0.5);
}
.buy-modal-inner {
  position: fixed;
  z-index: 2001;
  top: 360px;
  left: 50%;
  transform: translateX(-50%);
  width: 1259px;
  height: 266px;
  background-image: url(../assets/imgs/modal-bg.png);
  background-size: cover;
}
.buy-modal-inner img {
  width: 113px;
  height: 96px;
  position: absolute;
  top: 85px;
  left: 95px;
}
.modal-title {
  font-size: 34px;
  font-family: ali-regular;
  font-weight: 400;
  color: rgba(255, 255,255, .85 );
  letter-spacing: 10px;
  padding-left: 376px;
  padding-top: 10px;
}
.name-input {
    width: 468px;
    height: 48px;
    margin-left: 447px;
    margin-top: 41px;
    background: #1c5357;
}
.name-input input {
  width: 100%;
  height: 100%;
  font-size: 34px;
  background: transparent;
  color: #fff;
  margin-left: 20px;
}
input::-webkit-input-placeholder,
input::-moz-placeholder,
input:-moz-placeholder,
input:-ms-input-placeholder
 {
  font-size: 34px;
  font-family: ali-regular;
  font-weight: 400;
  color: #000;
  opacity: 0.6;
  padding-left: 80px;
}

.check-btn {
  width: 260px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #fdd503;
  color: #1a141a;
  font-size: 30px;
  font-weight: bold;
  font-family: 'ali-bold';
  margin-left: 512px;
  margin-top: 20px;
  cursor: pointer;
}
.buy-now {
  position: fixed;
  z-index: 100;
  bottom: 15%;
  right: 70px;
  width: 260px;
  height: 82px;
  border-radius: 41px;
  overflow: hidden;
  cursor: pointer;
}
.buy-now div {
  position: absolute;
  z-index: 1;
  width: 260px;
  height: 82px;
  line-height: 82px;
  border-radius: 41px;
  background: #496dfd;
  box-shadow: -5px 0px 13px 0px rgba(1, 0, 53, 0.5);
  right: -300px;
  font-size: 29px;
  font-family: ali-bold;
  font-weight: bold;
  color: #ffffff;
  padding-left: 30px;
  transition: all 0.5s;
}
.buy-now img {
  position: absolute;
  z-index: 2;
  right: -7px;
  top: -11px;
}
.buy-now:hover.buy-now div {
  right: -30px;
}
.show-more {
  position: fixed;
  z-index: 1000;
  left: 50%;
  transform: translateX(-50%);
  bottom: 30px;
}
.title {
  padding-left: 214px;
}
.top-part{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 1077px;
  background-image: url(../assets/imgs/index-1.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.top-video {
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
}
.top-content {
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mask-up {
  position: absolute;
  z-index: 3;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 159px;
}

.nav-fixed {
  position: fixed;
  z-index: 1000;
  top: -200px;
  left: 0;
  width: 100%;
  padding: 50px 50px;
  background-color: #14151A;
  box-sizing: border-box;
  transition: all .5s;
}
.nav-bar {
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  padding: 50px 70px;
  box-sizing: border-box;
  transition: all .5s;
}
.nav-left img {
  margin-right: 47px;
}
.nav-left ul li {
  font-size: 20px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  margin-right: 40px;
  cursor: pointer;
}
.nav-left ul li:hover {
  color: #fed402;
}
.nav-right li {
  font-size: 20px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  margin-left: 47px;
  cursor: pointer;
}
.nav-right li img {
  margin-right: 10px;
}
.center-desc {
  margin-top: 270px;
}
.center-desc h1 {
  font-size: 82px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
}
.center-desc p {
  font-size: 40px;
  font-family: ali-regular;
  font-weight: 400;
  color: #ffffff;
  text-align: center;
  letter-spacing: 18px;
}
.top-btns {
  margin-top: 60px;
  cursor: pointer;
}
.top-btns > div {
  position: relative;
  width: 284px;
  height: 82px;
  line-height: 82px;
  text-align: center;
  font-size: 30px;
  font-family: ali-bold;
  font-weight: bold;
  color: #19131a;
  overflow: hidden;
}
.top-btns > div span {
  opacity: 0;
  animation: opacity 0.3s;
  animation-delay: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;
}
@keyframes opacity {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.enter-btn {
  margin-right: 35px;
  background: #ffd600;
}
.enter-btn:before,
.guest-btn:before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0px;
  width: 110%;
  height: 102%;
  filter: brightness(1.07);
  opacity: 0;
  transform: translate3d(-100%, 0px, 0px);
  transition: transform 0.4s ease 0s, opacity 0.4s ease 0s;
}
.enter-btn:before {
  background-color: rgb(254, 212, 0);
}
.guest-btn:before {
  background-color: #dedede;
}
.guest-btn {
  margin-right: 35px;
  background: #fff;
}
.enter-btn:hover:before,
.guest-btn:hover:before {
  opacity: 1;
  transform: translate3d(0px, 0px, 0px);
}

.what-is {
  position: absolute;
  bottom: 60px;
  padding-left: 60px;
  margin-top: 220px;
}
.what-is h1 {
  font-size: 30px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffd600;
}
.what-is p {
  font-size: 22px;
  font-family: ali-regular;
  font-weight: 400;
  color: #ffffff;
  line-height: 36px;
  opacity: 0.6;
}
.event-part {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 1244px;
  background-image: url(../assets/imgs/index-2.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
.event-title {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
.mask-down {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 305px;
}
.event-list {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 0 auto;
  margin-top: 575px;
}
.v-line {
  position: absolute;
  top: -80px;
  left: 10px;
}
.event-swiper {
  width: 100%;
  height: 300px;
}
.event-item {
  align-items: center;
  padding-left: 6px;
}
.event-item p {
  font-size: 20px;
  font-family: ali-regular;
  font-weight: 400;
  color: rgba(255, 255, 255, .6);
  transition: all .5s;
}
.event-slide.swiper-slide-active .event-item p {
  font-size: 30px;
  line-height: 30px;
  font-family: ali-medium;
  font-weight: 500;
  color: rgba(255, 255, 255,1);
}
.event-item div {
  width: 11px;
  height: 11px;
  background: #fff;
  border-radius: 50%;
  margin-right: 37px;
  transition: all .5s;
}
.event-slide.swiper-slide-active .event-item div {
  width: 14px;
  height: 14px;
  margin-left: -2px;
}
.game-part {
  overflow: hidden;
  width: 100%;
  height: 2126px;
  background-image: url(../assets/imgs/index-3.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
.game-play {
  position: relative;
  width: 100%;
  height: 900px;
  transform: translate3d(30px,0,0);
  transition: transform .8s,opacity .4s;
  transition-timing-function: cubic-bezier(.165,.84,.44,1);
}
.fade-right {
  transform: translateZ(0);
}
.jump-img {
  width: 1064px;
  height: 693px;
  position: absolute;
  z-index: 1;
}
.nft-img {
  width: 931px;
  height: 600px;
  position: absolute;
  z-index: 1;
}
.game-play div {
  position: absolute;
  z-index: 2;
  width: 641px;
}
.ltr {
  margin-top: 217px;
}
.ltr > img {
  left: 212px;
}
.ltr > div {
  right: 270px;
  margin-top: 150px;
}
.rtl {
  margin-top: 270px;
}
.rtl > img {
  right: 260px;
}
.rtl > div {
  left: 248px;
  margin-top: 120px;
}
.game-play div h1 {
  font-size: 56px;
  line-height: 56px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 20px;
}
.game-play div p {
  font-size: 24px;
  line-height: 26px;
  font-family: ali-regular;
  font-weight: 400;
  color: #ffffff;
  margin-bottom: 20px;
}
.space-part {
  overflow: hidden;
  width: 100%;
  height: 1624px;
  background-image: url(../assets/imgs/index-4.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}
.swiper-part {
  position: relative;
  height: 500px;
}
.swiper-part .swiper-container {
  height: 100%;
}
.swiper-box {
  width: 100%;
  height: 400px;
}
.swiper-box.swiper-slide-active img {
  transform: scale(2);
}
.swiper-img {
  width: 300px;
  height: 160px;
  display: block;
  margin: 0 auto;
  transition: all .5s ease-in-out;
}
.prev,
.next {
  width: 84px;
  height: 84px;
  background: rgba(255, 255, 255, 0.2);
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  margin: auto;
  cursor: pointer;
  background-size: cover;
  outline: none;
}
.prev {
  background-image: url(../assets/imgs/arr-left-i.png);
  left: 40px;
}
.prev:hover {
  background-image: url(../assets/imgs/arr-left.png);
}
.next {
  background-image: url(../assets/imgs/arr-right-i.png);
  right: 40px;
}
.next:hover {
  background-image: url(../assets/imgs/arr-right.png);
}
.props {
  margin-top: 190px;
}
.props img {
  display: block;
  margin: 0 auto;
}
.props p {
  font-size: 24px;
  font-family: ali-regular;
  font-weight: 400;
  color: #999999;
  width: 1183px;
  text-align: center;
  margin: 0 auto;
  margin-top: 70px;
}
.foot-part {
  width: 100%;
  height: 2291px;
  background-image: url(../assets/imgs/index-5.png);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center top;
}

.part-list {
  margin-top: 90px;
  flex-wrap: wrap;
}
.part-list div {
  width: 320px;
  height: 194px;
  background: #d8d8d8;
  border: 1px solid #979797;
  opacity: 0.2;
  margin-bottom: 60px;
  background-size: cover;
}
@media screen and (max-width: 1700px) {
  .part-list div {
    width: 280px;
    height: 180px;
    margin-bottom: 46px;
  }
}

.follow {
  font-size: 40px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin-top: 424px;
  margin-bottom: 170px;
}
.brand-icon {
  position: relative;
  margin-right: 120px;
  cursor: pointer;
}
.brand-icon:last-child {
  margin-right: 0;
}
.brand-desc {
  position: absolute;
  left: 35px;
  bottom: -20px;
  padding: 10px 20px;
  color: #fff;
  border: 1px solid rgba(255, 255, 255, .8);
  background-color: rgba(255, 255, 255, .3);
  text-align: center;
}
.bottom-menu {
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
}
.bottom-menu div {
  padding-left: 50px;
}
.menu-inner {
  width: 230px;
  margin: 0 auto;
}
.type-name {
  font-size: 16px;
  font-family: ali-medium;
  font-weight: 500;
  color: #999999;
  margin: 0 auto;
  margin-bottom: 34px;
}
.menu-list li {
  font-size: 16px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  margin-bottom: 27px;
  cursor: pointer;
}
.game-info {
  height: 56px;
  font-size: 16px;
  font-family: ali-medium;
  font-weight: 500;
  color: #ffffff;
  text-align: center;
  margin: 0 auto;
  margin-top: 107px;
}

</style>
