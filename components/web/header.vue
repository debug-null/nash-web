<template>
  <header>
    <div class="nav-left">
      <div class="logo item">
        <img src="~static/images/web/logo.png" alt="logo" />
      </div>
    </div>
  </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {
      addressNow: ''
    };
  },
  computed: {},
  mounted(){
    if (process.browser) {
       setTimeout(() => {
        this.handleLogin();
      }, 2000);
    }
  },
  methods: {
     handleLogin() {
      if (addressNow) {
        this.addressNow = `${addressNow.substr(0, 6)}......${addressNow.substr(
          -4
        )}`;
      }
    },
  }
};
</script>
<style lang="scss" scoped>
 header {
    width: 111.25rem;
    margin: 3.75rem auto 0 auto;
    height: 64px;
    display: flex;
    .nav-left {
      flex: 1;
      display: flex;
      align-items: center;
      .logo {
        width: 4.3125rem;
        height: 3.625rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

</style>
