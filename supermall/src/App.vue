<template>
  <div id="app">
    <TabBar/>
  </div>
</template>

<script>

  // 引入tabbar模块
import TabBar from './components/content/mainTabBar/MainTabBar';
export default {
  name: 'App',
  components: {
    TabBar
  }
}
</script>

<style>
@import './assets/css/base.css';


</style>