<template>
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
  </div>
  </header>
</template>
<script>
export default {
  name: "Header",
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {}
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
        width: 4.125rem;
        height: 4rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .menu-box {
        margin-left: 2.5rem;
        ul {
          display: flex;
          flex-flow: row wrap;
          justify-content: flex-end;
          list-style: none;
          li {
            padding-right: 2.5rem;
            a {
              color: #fff;
              font-size: 1.25rem;
              text-decoration: none;
              display: inline-block;
              text-transform: uppercase;
              &:hover {
                color: #ffce30;
              }
            }
          }
        }
      }
    }
    .nav-right {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          margin-right: 1.25rem;
        }
      }
      .login {
        margin-right: 3.125rem;

        .text {
          display: inline-block;
          font-size: 1.25rem;
        }
        img {
          width: 1.5625rem;
          height: 1.625rem;
        }
      }
      .language {
        .language-list {
          font-size: 1.25rem;
          display: inline-block;
        }
        img {
          width: 1.5625rem;
          height: 1.5rem;
        }
      }
    }
  }

</style>
