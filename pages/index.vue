<template>
  <div class="index-container">
    <Header />
    <Section />
    <Footer />
    <div class="buy-container"></div>

    <!-- buy now 悬浮按钮 -->
    <div class="buy-now" @click="toggleBuy">
      <div>BUY NOW</div>
      <img src="/images/web/icon-buyNow.png" alt="icon-buyNow.png" />
    </div>

    <!-- 弹窗 -->
    <div class="buy-modal" v-if="isShowModal" @click="toggleBuy">
      <div class="buy-modal-inner" @click.stop>
        <div class="modal-title">SHIP</div>
        <div class="modal-content">
          <div class="name-input">
            <input type="text" v-model="spaceName" placeholder="Enter NAME" />
          </div>
          <div
            v-loading="nameLoading"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgb(84 71 5)"
            class="check-btn"
            @click="handleBuy"
          >
            {{ isConnectWallet ? "MINT SHIP" : "install wallet" }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Header from "@/components/web/header";
import Section from "@/components/web/section";
import Footer from "@/components/web/footer";

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
  components: { Header, Section, Footer },
  data() {
    return {
      isConnectWallet: false,
      isShowModal: false,
      spaceName: "",
      nameLoading: false
    };
  },
  computed: {},
  mounted() {
    if (process.browser) {
      this.isInstallWalletFn();
    }
  },
  methods: {
    // 打开/关闭购买弹框
    toggleBuy() {
      this.spaceName = "";
      // 钱包是否连接成功
      this.isConnectWallet = !!ShipContract;
      this.isShowModal = !this.isShowModal;
    },
    // 是否链接钱包
    isInstallWalletFn() {
      this.isConnectWallet = !!ShipContract;
      console.log(
        "🚀 ~ file: index2.vue ~ line 73 ~ isInstallWalletFn ~ this.isConnectWallet",
        this.isConnectWallet
      );
    },
    async handleBuy() {
      // ①根据ShipContract是否是undefined来判断是否连接钱包成功。如果不成功则显示提示连接钱包的按钮而非检查名称
      // ②直接将检查名称checkName变为mintShip
      this.startFlashing = false;
      // 没有安装钱包插件
      if (!this.isConnectWallet) {
        this.isShowModal = false;
        window.open(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
          "_blank"
        );
        return false;
      }
      // 名字empty
      if (!this.spaceName) {
        this.$message({ iconClass: "none", message: "Name empty!" });
        return false;
      }

      this.nameLoading = true;

      const isExist = await nameAvailable(this.spaceName);
      if (isExist) {
        this.$message({
          iconClass: "none",
          message: "Congratulations! Name is available. Evoke transaction."
        });
        const ret = await buyShip(this.spaceName).catch(
          e => (this.nameLoading = false)
        );

        let msg = "";
        // 购买成功
        if (ret) {
          this.isShowModal = false;
          msg = "Purchase Successful！ Enter to Start！";
        } else {
          msg = "Purchase Cancelled!";
        }
        this.nameLoading = false;
        this.$message({ iconClass: "none", message: msg });
      } else {
        // 名字被占用加背景闪烁
        this.runFlashing();
        this.$message({ iconClass: "none", message: "Name already taken!" });
      }
    }
  }
};
</script>
<style scoped lang="scss">
.index-container {
  min-width: 750px;
  width: 100%;
  height: 100%;
  background: url("/images/web/bg.png") no-repeat center center;
  background-size: cover;
  color: #fff;
  user-select: none;
  font-family: "ali-medium";
  overflow: hidden;

  .buy-now {
    position: fixed;
    z-index: 100;
    bottom: 15%;
    right: 4.375rem;
    width: 16.25rem;
    height: 5.125rem;
    border-radius: 2.5rem;
    overflow: hidden;
    cursor: pointer;
    div {
      position: absolute;
      z-index: 1;
      width: 16.25rem;
      height: 5.125rem;
      line-height: 5.125rem;
      border-radius: 2.5rem;
      background: #496dfd;
      box-shadow: -5px 0px 13px 0px rgba(1, 0, 53, 0.5);
      right: -300px;
      font-size: 1.8125rem;
      font-family: ali-bold;
      font-weight: bold;
      color: #ffffff;
      padding-left: 1.875rem;
      transition: all 0.5s;
    }
    img {
      position: absolute;
      z-index: 2;
      right: -0.4375rem;
      top: -0.6875rem;
      width: 6.5rem;
      height: 6.5rem;
    }
    &:hover {
      div {
        right: -30px;
      }
    }
  }

  .buy-modal {
    position: fixed;
    z-index: 2000;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    .buy-modal-inner {
      position: fixed;
      z-index: 2001;
      top: 22.5rem;
      left: 50%;
      transform: translateX(-50%);
      width: 78.6875rem;
      height: 16.625rem;
      background-image: url(/images/web/shipName-modal.png);
      background-size: cover;
      .modal-title {
        position: absolute;
        top: 3%;
        left: 25%;
        color: rgba(255, 255, 255, 0.85);

        letter-spacing: 10px;
        font-size: 2.154375rem;
      }
      .modal-content {
        position: absolute;
        top: 6.25rem;
        left: 27.375rem;
        .name-input {
          input {
            background: none;
            outline: none;
            width: 30rem;
            height: 3.4375rem;
            line-height: 3.4375rem;
            font-size: 2.129375rem;
            text-align: center;
            color: #fff;
          }
        }
        .check-btn {
          width: 16.25rem;
          height: 3.125rem;
          line-height: 3.125rem;
          text-align: center;
          background: #fdd503;
          color: #1a141a;
          font-size: 1.875rem;
          font-weight: bold;
          font-family: "ali-bold";
          margin-top: 1.25rem;
          cursor: pointer;
          margin-left: 5.625rem;
        }
      }
    }


  }

  .flashing {
    animation: fade 0.6s 5;
  }
  @keyframes fade {
    from {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}
</style>
<style lang="scss">
// 预加载图片
 body{
 background-image:
 url("/images/web/footer-occupation.png"),
 url("/images/web/footer-bg.png"),
 url("/images/web/events.png"),
 url("/images/web/events_line.png"),
 url('/images/web/space_station.png');
background-size:0 0;
}
.public-title {
  font-size: 3.5rem;
  color: #fff;
  font-family: ali-medium;
  position: relative;
  margin-bottom: 5rem;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 117px;
    height: 6px;
    background: url("/images/web/title-line.png") no-repeat center center;
  }
}

.buy-modal-inner{
  .el-loading-mask {
      .el-loading-spinner {
        margin-top: -16px !important;
      }
    }
}
</style>
