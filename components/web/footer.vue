<template>
  <footer>
    <div class="occupation"></div>
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
    background-color: #111111;
    overflow: hidden;
    height: 3.75rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
