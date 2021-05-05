<template>
  <div class="home">
    <!-- 吸顶导航 -->
    <div
      class="flex-hbc"
      :class="[isShowNav ? 'nav-fixed' : 'nav-bar']"
      :style="{ top: isShowNav ? '0' : '' }"
    >
      <div class="nav-left flex-hbc">
        <img :src="logo" />
        <ul class="flex-hbc">
          <li v-for="(item, i) in navLeft" :key="i">{{ item.text }}</li>
        </ul>
      </div>
      <ul class="nav-right flex-hbc">
        <li class="flex-hbc" @click="handleLogin">
          <img v-if="!addressNow" :src="login" />
          <span> {{ addressNow ? addressNow : 'LOGIN' }}</span>
        </li>
        <li class="flex-hbc">
          <img :src="lang" />
          <span>EN</span>
        </li>
      </ul>
    </div>
    <!-- buy now 悬浮按钮 -->
    <div class="buy-now" @click="toggleBuy">
      <div>BUY NOW</div>
      <img :src="buy" alt="" />
    </div>
    <!-- 弹窗 -->
    <div class="buy-modal" v-if="isShowModal" @click="toggleBuy">
      <div class="buy-modal-inner" @click.stop>
        <img :src="logoI" alt="" />
        <div class="modal-title">SHIP</div>
        <div class="name-input" :class="{ flashing: startFlashing }">
          <input type="text" v-model="spaceName" placeholder="Enter NAME" />
        </div>
        <div v-loading="isLoading" class="check-btn" @click="handleBuy">
          {{ isConnectWallet ? 'MINT SHIP' : 'install wallet' }}
        </div>
      </div>
    </div>
    <!-- 向下翻页箭头动画 -->
    <down-arr v-show="isShowArr" class="show-more" />
    <section class="top-part" :style="{ height: bodyHeight + 'px' }">
      <!-- <video class="top-video" muted autoplay poster>
        <source src="https://web.ccpgamescdn.com/aws/eveonline/videos/reign-splash.mp4" type="video/mp4">
        <source src="https://web.ccpgamescdn.com/aws/eveonline/videos/reign-splash.webm" type="video/webm">
      </video> -->
      <div class="top-content">
        <div class="center-desc">
          <h1>NASH METAVERSE</h1>
          <p>CREATE YOUR METAVERSE</p>
          <div class="top-btns flex-hc">
            <div class="enter-btn"><span>ENTER</span></div>
            <div class="guest-btn"><span>GUEST</span></div>
          </div>
        </div>
        <div class="what-is">
          <h1>WHAT IS NASH METAVERSE?</h1>
          <p>The Nash Metaverse is a Cross-Chain Decentralized Metaverse.</p>
          <p>Choose your own path, explore and create an infinitely evolving space Metaverse.</p>
          <p>Become a Captain, to Experience the Exciting Competition, and Build your own Economic and Political System</p>
          <p>Become a Governor, Establish your own Planet Base, and Create your own Applications and Services in the Nash Metaverse</p>
          <p>Earn by Participating in the Game and Contributing to the Ecosystem.</p>
        </div>
      </div>
      <!-- <img class="mask-up" :src="maskUp" /> -->
    </section>
    <!-- 事件部分 -->
    <section class="event-part">
      <!-- <img class="mask-down" :src="maskDown" /> -->
      <h-title
        style="margin-top: 94px"
        class="title event-title"
        text="WHAT IS HAPPENING IN NASH METAVERSE ?"
      />
      <div class="event-list">
        <img class="v-line" :src="vline" />
        <no-ssr>
          <swiper class="event-swiper" ref="event" :options="eventOptions">
            <swiper-slide
              class="event-slide"
              v-for="(item, i) in events"
              :key="i"
            >
              <div class="event-item flex">
                <div></div>
                <p>{{ item.text }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </no-ssr>
      </div>
    </section>
    <!-- GAME PLAY -->
    <section class="game-part">
      <h-title class="title" style="margin-top: 116px" text="GAMEPLAY" />
      <div class="game-play ltr">
        <img class="jump-img" :src="jump" />
        <div class="">
          <h1>EXPLORE</h1>
          <p>Obtain your NASH spaceship NFT.</p>
          <p>Compete, Upgrade, Build, Create, and join Alliance.</p>
          <p>Earn income, Grow and Evolve with the Nash Metaverse.</p>
        </div>
      </div>
      <div class="game-play rtl">
        <div class="">
          <h1>CREATE</h1>
          <p>Open and Transparent On-Chain Data to All Players.</p>
          <p>Own and Control your Personalized NASH Metaverse NFTs.</p>
          <p>Use NASH editor to Create Highly Interactive Applications and Games.</p>
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
        <no-ssr>
          <swiper ref="spaceSwiper" :options="swiperOption">
            <swiper-slide
              class="swiper-box flex-cc"
              v-for="(item, i) in spaceList"
              :key="i"
            >
              <img class="swiper-img" :src="item.img" />
            </swiper-slide>
          </swiper>
        </no-ssr>
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
      <!-- <el-row type="flex" justify="center">
        <el-col :span="20">
          <h-title text="PARTENERS" />
          <div class="flex-hb part-list">
            <div
              :style="{ backgroundImage: `url(${item.img})` }"
              v-for="(item, i) in parteners"
              :key="i"
            ></div>
          </div>
        </el-col>
      </el-row> -->
      <h3 class="follow fadeout">FOLLOW NASH METAVERSE</h3>
      <div class="flex-hc fadeout">
        <div
          @mouseover="handelEnterBrand(i)"
          @mouseleave="handelLeaveBrand(i)"
          class="brand-icon"
          v-for="(item, i) in brands"
          :key="i"
        >
          <img :src="item.icon" alt="" />
          <div v-if="item.isActive" class="brand-desc">{{ item.title }}</div>
        </div>
      </div>
      <!-- <el-row class="bottom-menu fadeout">
        <el-col
          :xl="6"
          :lg="6"
          :md="6"
          :sm="12"
          :xs="24"
          v-for="item in menus"
          :key="item.type"
        >
          <div class="menu-inner">
            <h4 class="type-name">{{ item.type }}</h4>
            <ul class="menu-list">
              <li v-for="subItem in item.list" :key="subItem.text">
                {{ subItem.text }}
              </li>
            </ul>
          </div>
        </el-col>
      </el-row> -->
      <div class="game-info">
        <p>NASH METAVERSE is a blockchain meta-universe MMO game.</p>
        <p>
          Every player owns a spacecraft, In NASH METAVERSE, every player has
          the chance to become the greatest captain. In NASH METAVERSE, players
          can cross
        </p>
        <p>
          thousands of planetary systems and participate in activities with
          thousand other players, by battle, trade and exploration.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import HTitle from "@/components/HTitle";
import DownArr from "@/components/DownArr";

export default {
  head() {
    return {
      script: [
        { src: "./js/web3.min.js" },
        { src: "./js/ShipABI.js" },
        { src: "./js/buy.js" },
      ],
    };
  },
  components: {
    HTitle,
    DownArr,
  },
  data() {
    return {
      addressNow: '',
      isConnectWallet: false,
      startFlashing: false, // 名字是否被占用
      isShowModal: false,
      isLoading: false,
      spaceName: "",
      bodyHeight: 0,
      isShowNav: false,
      isShowArr: false,
      navLeft: [
        { text: "ABOUT", link: "" },
        { text: "EVENTS", link: "" },
        { text: "SPACESHIP", link: "" },
        { text: "GAMEPLAY", link: "" },
        // { text: "PARTENERS", link: "" },
      ],
      // 事件列表
      events: [
        { text: "April 15th - 5000 spaceships launched." },
        { text: "May 05th - NASH Metaverse First Playable." },
        { text: "COMING SOON - Competitive Mode." },
        { text: "COMING SOON - Planet NFT" },
        { text: "COMING SOON - Open Editor to Players" },
      ],
      eventOptions: {
        direction: "vertical",
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
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
      // 飞船轮播
      spaceList: [
        { img: require("@/assets/imgs/space-1.png") },
        { img: require("@/assets/imgs/space-2.png") },
        { img: require("@/assets/imgs/space-3.png") },
      ],
      // 合作伙伴
      parteners: [
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
        { img: "", link: "" },
      ],
      // 底部菜单配置
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
        {
          icon: require("@/assets/imgs/facebook-i.png"),
          title: "facebook",
          isActive: false,
          link: "",
        },
        {
          icon: require("@/assets/imgs/twitter-i.png"),
          title: "twitter",
          isActive: false,
          link: "",
        },
        {
          icon: require("@/assets/imgs/youtube-i.png"),
          title: "youtube",
          isActive: false,
          link: "",
        },
        {
          icon: require("@/assets/imgs/twitch-i.png"),
          title: "twitch",
          isActive: false,
          link: "",
        },
        {
          icon: require("@/assets/imgs/instagram-i.png"),
          title: "instagram",
          isActive: false,
          link: "",
        },
        {
          icon: require("@/assets/imgs/vk-i.png"),
          title: "vk",
          isActive: false,
          link: "",
        },
      ],
    };
  },
  computed: {
    login: function () {
      return require("@/assets/imgs/login-i.png");
    },
    lang: function () {
      return require("@/assets/imgs/lang-i.png");
    },
    logo: function () {
      return require("@/assets/imgs/logo.png");
    },
    logo: function () {
      return require("@/assets/imgs/logo.png");
    },
    logoI: function () {
      return require("@/assets/imgs/logo-i.png");
    },
    buy: function () {
      return require("@/assets/imgs/buy-i.png");
    },
    props: function () {
      return require("@/assets/imgs/prop-icon.png");
    },
    jump: function () {
      return require("@/assets/imgs/jump11.png");
    },
    nft: function () {
      return require("@/assets/imgs/nft.png");
    },
    vline: function () {
      return require("@/assets/imgs/v-line.png");
    },
    maskUp: function () {
      return require("@/assets/imgs/mask-up.png");
    },
    maskDown: function () {
      return require("@/assets/imgs/mask-down.png");
    },
  },
  methods: {
    handleLogin() {
      doLogin()
      if (addressNow) {
        this.addressNow = `${addressNow.substr(0,6)}......${addressNow.substr(-4)}`
      }
    },
    handelEnterBrand(index) {
      this.brands = this.brands.map((o, i) => {
        if (index == i) {
          o.icon = require(`@/assets/imgs/${o.title}.png`);
          o.isActive = true;
        }
        return o;
      });
    },
    handelLeaveBrand(index) {
      this.brands = this.brands.map((o, i) => {
        if (index == i) {
          o.icon = require(`@/assets/imgs/${o.title}-i.png`);
          o.isActive = false;
        }
        return o;
      });
    },
    // 打开/关闭购买弹框
    toggleBuy() {
      this.spaceName = ''
      // 钱包是否连接成功
      this.isConnectWallet = !!ShipContract
      this.isShowModal = !this.isShowModal;
    },
    runFlashing() {
      this.startFlashing = true;
      setTimeout(() => {
        this.startFlashing = false;
      }, 4000)
    },
    // 购买
    async handleBuy() {
      if (this.isLoading) {
        return false
      }
      // ①根据ShipContract是否是undefined来判断是否连接钱包成功。如果不成功则显示提示连接钱包的按钮而非检查名称
      // ②直接将检查名称checkName变为mintShip
      this.startFlashing = false;
      // 没有安装钱包插件
      if (!this.isConnectWallet) {
        this.isShowModal = false;
        window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '_blank')
        return false
      } 
      // 名字empty
      if (!this.spaceName) {
        this.runFlashing();
        this.$message({ iconClass: "none", message: "Name empty!" });
        this.isLoading = false;
        return false
      }
      this.isLoading = true;
      const isExist = await nameAvailable(this.spaceName);
      if (isExist) {
        this.$message({ iconClass: "none", message: "Congratulations! Name is available. Evoke transaction." });
        const ret = await buyShip(this.spaceName).catch(
          (e) => (this.isLoading = false)
        );
        console.log(ret, "after buy");
        let msg = "";
        // 购买成功
        if (ret) {
          this.isShowModal = false;
          msg = "Purchase Successful！ Enter to Start！";
        } else {
          msg = "Purchase Cancelled!";
        }
        this.$message({ iconClass: "none", message: msg });
      } else {
        // 名字被占用加背景闪烁
        this.runFlashing();
        this.$message({ iconClass: "none", message: "Name already taken!" });
      }
      this.isLoading = false;
    },
    onScroll() {
      const scrtop =
        document.documentElement.scrollTop | document.body.scrollTop;
      this.isShowArr = scrtop < 30;
      this.isShowNav = scrtop > 160;

      Array.from(document.querySelectorAll(".fadeout")).map((o) => {
        const top = o.getBoundingClientRect().top;
        if (top < this.bodyHeight && !o.classList.contains("fadein")) {
          o.classList.add("fadein");
        }
      });
      Array.from(document.querySelectorAll(".h-title")).map((o) => {
        const top = o.getBoundingClientRect().top;
        if (top < this.bodyHeight) {
          const content = o.querySelector(".content");
          const img = o.querySelector("img");
          !content.classList.contains("title-enter") &&
            content.classList.add("title-enter");
          !img.classList.contains("line-enter") &&
            img.classList.add("line-enter");
        }
      });
      Array.from(document.querySelectorAll(".game-play")).map((o) => {
        const top = o.getBoundingClientRect().top;
        if (top < this.bodyHeight) {
          !o.classList.contains("fade-right") && o.classList.add("fade-right");
        }
      });
    },
  },
  destroyed() {
    window.removeEventListener("scroll", this.onScroll);
  },
  // 服务端数据获取
  async asyncData({ app }) {
    // console.log(process.env.baseUrl, '环境变量')
    const ip = await app.$axios.$get("http://icanhazip.com");
    return { ip };
  },
  mounted() {
    if (process.browser) {
      this.bodyHeight =
        document.documentElement.clientHeight || window.innerHeight;
      const scrtop =
        document.documentElement.scrollTop | document.body.scrollTop;
      this.isShowArr = scrtop < 30;
      this.isShowNav = scrtop > 160;
      window.addEventListener("scroll", this.onScroll);
      setTimeout(() => {
        this.handleLogin()
      }, 2000)
    }
    // 请求示例   axios base配置请看  /plugins/axios.js文件
    // this.$axios.get("/testGet").then((res) => {
    //   console.log(res);
    // });
    // this.$axios.post("/testPost").then((res) => {
    //   console.log(res);
    // });
  },
};
</script>
<style scoped>
@import "./index.css";
</style>
