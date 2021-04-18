<template>
  <div id="app">
    <router-view/>
    <TabBar>
        <TabBaritem path = '/home'>
          <img slot="item-icon" src="./assets/img/TabBar/tabbardefault.png" alt="">
          <img slot="item-color" src="./assets/img/TabBar/tabbarcolor.png" alt="">
        </TabBaritem>
        <TabBaritem path = '/categary'>
          <img slot="item-icon" src="./assets/img/TabBar/tabbardefault.png" alt="">
          <img slot="item-color" src="./assets/img/TabBar/tabbarcolor.png" alt="">
        </TabBaritem>
        <TabBaritem path = '/cart'>
          <img slot="item-icon" src="./assets/img/TabBar/tabbardefault.png" alt="">
          <img slot="item-color" src="./assets/img/TabBar/tabbarcolor.png" alt="">
        </TabBaritem>
        <TabBaritem path = '/profile'>
          <img slot="item-icon" src="./assets/img/TabBar/tabbardefault.png" alt="">
          <img slot="item-color" src="./assets/img/TabBar/tabbarcolor.png" alt="">
        </TabBaritem>
    </TabBar>
  </div>
</template>

<script>
import TabBar from './components/tabbar/TabBar';
import TabBaritem from './components/tabbar/TabBaritem'
export default {
  name: 'App',
  components: {
   TabBar,
   TabBaritem
  }
}
</script>

<style>
@import './assets/css/base.css';


</style>