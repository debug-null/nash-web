<template>
  <div class="ship-name-container">
    <div class="mask" @click="maskClick"></div>
    <div class="content">
      <div class="title">
        SHIP NAME
      </div>
      <div class="btn-box">
        <input
          type="text"
          class="btn space-name"
          placeholder="Enter Name"
          v-model="spaceName"
        />
        <div class="btn active" @click="checkName" v-if="!isExistName">
          {{ isInstallWallet ? "CHECK NAME" : "Install wallet" }}
        </div>
        <div class="btn active" @click="mintNft" v-else>
          Mint NFT
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShipName",
  components: {},
  data() {
    return {
      isInstallWallet: false, //是否安装钱包
      isExistName: false, //飞船名称是否可用
      spaceName: ""
    };
  },
  mounted() {
    console.log(
      "🚀 ~ file: shipName.vue ~ line 35 ~ checkName ~ ShipContract",
      ShipContract
    );
    this.isInstallWalletFn();
  },
  computed: {},
  methods: {
    maskClick() {
      this.$emit("mask");
    },
    // 是否安装钱包
    isInstallWalletFn() {
      this.isInstallWallet = !!ShipContract;
    },
    async checkName() {
      //  检测是否链接钱包
      //  没有链接钱包，更换文案，调用登录
      if (!this.isInstallWallet) {
        this.maskClick();
        window.open(
          "https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn",
          "_blank"
        );
        return;
      }

      if (this.isInstallWallet) {
        console.log(
          "🚀 ~ file: shipName.vue ~ line 35 ~ checkName ~ ShipContract",
          ShipContract
        );
        if (!this.spaceName) {
          this.$message({ iconClass: "none", message: "Name empty!" });
        }
        const isExist = await nameAvailable(this.spaceName);

        console.log(
          "🚀 ~ file: shipName.vue ~ line 38 ~ checkName ~ isExist",
          isExist
        );
        // 名称可用，切换至铸造NFT按钮
        if (isExist) {
          this.isExistName = true;
        } else {
          this.$message({ iconClass: "none", message: "Name already taken!" });
        }
      }
    },
    // 铸造NFT，购买飞船
    async mintNft() {
      this.$message({
        iconClass: "none",
        message: "Congratulations! Name is available. Evoke transaction."
      });
      const ret = await buyShip(this.spaceName).catch(
        e => (this.isLoading = false)
      );
      console.log("🚀 ~ file: shipName.vue ~ line 63 ~ checkName ~ ret", ret);
      let msg = "";
      // 购买成功
      if (ret) {
        this.isShowModal = false;
        msg = "Purchase Successful！ Enter to Start！";
      } else {
        msg = "Purchase Cancelled!";
      }
      this.$message({ iconClass: "none", message: msg });
    }
  }
};
</script>
<style lang="scss" scoped>
.ship-name-container {
  .mask {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10;
  }

  .content {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 20;
    transform: translate(-50%, -50%);
    width: 39.0625rem;
    height: 21rem;
    background: url("/images/mobile/ship-name_bg.png") no-repeat center center;
    background-size: cover;
    color: #fff;
    .title {
      font-size: 1.383125rem;
      position: absolute;
      top: 9%;
      left: 50%;
      transform: translate(-50%, 0);
      letter-spacing: 0.375rem;
    }
    .btn-box {
      position: absolute;
      top: 64%;
      left: 50%;
      width: 100%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-flow: column;
      .btn {
        border: none;
        font-size: 1.50125rem;
        border: 2px solid #5f6366;
        width: 65%;
        height: 3rem;
        line-height: 3rem;
        margin-bottom: 2.5rem;
        text-align: center;
      }
      .space-name {
        background: none;
        outline: none;
        color: #fff;
      }
      .active {
        color: #000;
        border: none;
        font-family: "ali-bold";
        font-size: 1.625rem;
        background-color: #ffcf30;
      }
    }
  }
}
</style>
