<template>
  <div class="index-container">
    <header>
      <div class="nav-left">
        <div class="logo item">
          <img src="/images/web/logo.png" alt="logo" />
        </div>
        <div class="menu-box item">
          <ul>
            <li><a href="About">About</a></li>
            <li><a href="About">events</a></li>
            <li><a href="About">spaceship</a></li>
            <li><a href="About">gameplay</a></li>
            <li><a href="About">parteners</a></li>
          </ul>
        </div>
      </div>

      <div class="nav-right">
        <div class="login item">
          <img src="/images/web/icon-person.png" alt="person.png" />
          <div class="text">LOG IN</div>
        </div>
        <div class="language item">
          <img src="/images/web/icon-language.png" alt="language" />
          <div class="language-list">EN</div>
        </div>
      </div>
    </header>
    <section>
      <div class="module-one">
        <h1>NASH METAVERSE</h1>
        <h2>CREATE YOUR UNIVERSE</h2>
        <div class="btn-box">
          <div class="btn yellow">
            ENTER
          </div>
          <div class="btn white">
            GUEST
          </div>
        </div>
      </div>
      <div class="module-two">
        <h4>WHAT IS NASH METAVERSE ?</h4>
        <div class="info">
          The Nash Metaverse is a Cross-Chain Decentralized Metaverse.<br />
          Choose your own path, explore and create an infinitely evolving space
          Metaverse. Become a Captain and Experience the Exciting Competition.
          Earn by Participating in the Game and Contributing to the Ecosystem.
        </div>
      </div>
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
            <img src="/images/web/explore-bg.png" alt="explore-bg.png" />
          </div>
          <div class="writing-box">
            <div class="title">
              Explore
            </div>
            <div class="writing">
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
            <img src="/images/web/create-bg.png" alt="create-bg.png" />
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
              <img src="/images/web/icon-left-arrow.png" alt="" />
            </div>
            <div class="next btn" slot="button-next">
              <img src="/images/web/icon-right-arrow.png" alt="" />
            </div>
          </div>
        </div>
        <div class="space-info">
          <div class="attr-box">
            <img src="/images/web/attr-info.png" alt="" />
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="occupation">

      </div>
      <div class="footer-container">
        <div class="top-conent">
          <h2>FOLLOW NASH METAVERSE</h2>
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
        <div class="bottom-menu">
          <div class="menu-type" v-for="item in menus" :key="item.type">
            <h3>{{ item.type }}</h3>
            <ul class="menu-list">
              <li v-for="(menu, i) in item.list" :key="i">
                <a :href="menu.link">{{ menu.text }}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="game-info">
          <p>NASH METAVERSE is a blockchain meta-universe MMO game.</p>
          <p>
            Every player owns a spacecraft, In NASH METAVERSE, every player has
            the chance to become the greatest captain. In NASH METAVERSE,
            players can cross
          </p>
          <p>
            thousands of planetary systems and participate in activities with
            thousand other players, by battle, trade and exploration.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
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
  components: {},
  data() {
    return {
      events: [
        { text: "April. 15. 5000 spaceships launched" },
        { text: "May 15th - NASH Metaverse First Playable" },
        { text: "COMING SOON - Competitive Mode" },
        { text: "COMING SOON - Planet NFT" },
        { text: "COMING SOON - Open Editor to Players" }
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
        { img: "/images/web/board-1.png" },
        { img: "/images/web/board-2.png" },
        { img: "/images/web/board-3.png" }
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
          link: "https://discord.gg/weX45CNp",
          img: "/images/web/icon-facebook.png"
        },
        {
          link: "https://t.me/joinchat/o9TnDUaHbYI4MjNl",
          img: "/images/web/icon-twitter.png"
        },
        {
          link: "https://twitter.com/nashmetaverse",
          img: "/images/web/icon-youtube.png"
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: "/images/web/icon-twitch.png"
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: "/images/web/icon-instagram.png"
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: "/images/web/icon-vk.png"
        }
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
            { text: "Starter Guide for Beginners", link: "" }
          ]
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
            { text: "Partnership Program", link: "" }
          ]
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
            { text: "Project Discovery", link: "" }
          ]
        },
        {
          type: "SITE INFO",
          list: [
            { text: "About CCP", link: "" },
            { text: "Terms of Service", link: "" },
            { text: "Privacy Policy", link: "" },
            { text: "Contact Us", link: "" },
            { text: "RSS Feed", link: "" }
          ]
        }
      ]
    };
  },
  computed: {},
  methods: {}
};
</script>
<style scoped lang="scss">
@import "./index2.scss";
</style>
