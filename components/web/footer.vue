<template>
  <footer>
    <div class="occupation">
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
    <div class="footer-container">
      <p>NASH Metaverse &copy; 2021, All rights reserved</p>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {

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
      ],
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
      display: flex;
      align-items: center;

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
  .footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1b1917;
    p{
      padding: 1.25rem;
      color: #a4a3a2;
    }
  }
}
</style>
