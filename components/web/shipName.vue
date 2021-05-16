<template>
  <div class='ship-name-container'>
<!-- 弹窗 -->
    <div class="buy-modal" v-if="isShowModal" @click="toggleBuy">
      <div class="buy-modal-inner" @click.stop>
        <img :src="logoI" alt="" />
        <div class="modal-title">SHIP</div>
        <div class="name-input" :class="{ flashing: startFlashing }">
          <input type="text" v-model="spaceName" placeholder="Enter NAME" />
        </div>
        <div v-loading="isLoading" class="check-btn" @click="handleBuy">
          {{ isConnectWallet ? "MINT SHIP" : "install wallet" }}
        </div>
      </div>
    </div>
</div>
</template>
<script>
export default {
name: 'ShipName',
components: {},
data(){
return{
}
},
  computed: {},
  methods: {}
}
</script>
<style lang='scss' scoped>
</style>
