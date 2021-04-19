<template>
  <div id="home">
      <navbar class="nav-home">
        <slot slot="center">购物街</slot>
      </navbar>
 </div>
</template>

<script>
// 引入navbar
import navbar from 'components/common/navbar/navbar';
import {getHomeMultidata} from 'network/home.js';
export default {
  name: '',
  data(){
    return {
      result:null
    }
  },
  components:{
    navbar
  },
  created(){
    getHomeMultidata().then(res=>{
      this.result = res;
    })
  }
 }
</script>

<style scoped>
.nav-home {
  background: var(--color-tine);
  color: #fff;
}
</style>