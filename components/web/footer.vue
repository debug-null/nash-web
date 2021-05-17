<template>
  <footer>
    <div class="occupation"></div>
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
          the chance to become the greatest captain. In NASH METAVERSE, players
          can cross
        </p>
        <p>
          thousands of planetary systems and participate in activities with
          thousand other players, by battle, trade and exploration.
        </p>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      shareLinks: [
        {
          link: "https://discord.gg/weX45CNp",
          img: require("@/static/images/web/icon-facebook.png")
        },
        {
          link: "https://t.me/joinchat/o9TnDUaHbYI4MjNl",
          img: require("@/static/images/web/icon-twitter.png")
        },
        {
          link: "https://twitter.com/nashmetaverse",
          img: require("@/static/images/web/icon-youtube.png")
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: require("@/static/images/web/icon-twitch.png")
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: require("@/static/images/web/icon-instagram.png")
        },
        {
          link: "https://nashmetaverse.medium.com/",
          img: require("@/static/images/web/icon-vk.png")
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
<style lang="scss" scoped>
footer {
  .occupation {
    width: 100%;
    height: 23.125rem;
    background: url("~static/images/web/footer-occupation.png") no-repeat center
      top;
  }
  .footer-container {
    background: url("~static/images/web/footer-bg.png") no-repeat center top;
    background-size: cover;
    overflow: hidden;
    padding-bottom: 11.875rem;
    .top-conent {
      h2 {
        text-align: center;
        font-size: 2.5rem;
        margin-top: 1.5625rem;
        padding-bottom: 10.625rem;
      }
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
    .bottom-menu {
      width: 75rem;
      margin: 6.25rem auto 0.625rem auto;
      display: flex;
      justify-content: space-between;
      .menu-type {
        h3 {
          font-size: 1rem;
          color: #999;
          margin-bottom: 1.875rem;
        }
        .menu-list {
          li {
            margin-bottom: 1.875rem;
            a {
              text-decoration: none;
              color: #fff;
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }
    }
    .game-info {
      padding: 6.25rem 0 6rem 0;
      font-size: 1rem;
      text-align: center;
    }
  }
}
</style>
