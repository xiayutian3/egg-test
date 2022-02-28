<template>
  <!-- <div id="nav">
    <van-button type="primary">主要按钮</van-button>
  </div> -->
  <router-view />
  <van-tabbar route>
    <van-tabbar-item replace to="/home" icon="home-o">首页</van-tabbar-item>
    <van-tabbar-item replace to="/add" icon="plus">添加</van-tabbar-item>
  </van-tabbar>
</template>
<script lang="ts">
import { Button, Tabbar, TabbarItem } from 'vant'
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    return {}
  },
  components: {
    [Button.name]: Button,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
