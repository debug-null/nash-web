<template>
  <div>
    <Nuxt />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}
ul {
  list-style-type: none;
}
textarea,select,input{
  /*去除阴影*/
  box-shadow:none;
  /*聚焦input的蓝色边框*/
  outline: none;
  /*textarea 禁止拖拽*/
  resize: none; 
  /*去除边框*/
  border: none; 
  /*常用于IOS下移除原生样式*/
  -webkit-appearance: none;
  /*点击高亮的颜色*/
  -webkit-tap-highlight-color:rgba(0,0,0,0); 
}
.flex {
  display: flex;
}
.flex-hc {
  display: flex;
  justify-content: center;
}
.flex-hs {
  display: flex;
  justify-content: flex-start;
}
.flex-he {
  display: flex;
  justify-content: flex-end;
}
.flex-hec {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.flex-hvc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-hb {
  display: flex;
  justify-content: space-between;
}
.flex-hbc {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.flex-cc {
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex-ha {
  display: flex;
  justify-content: space-around;
}
.flex-hac {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.flex-ve {
  display: flex;
  align-items: flex-end;
}
.flex-vc {
  display: flex;
  align-items: center;
}
</style>
