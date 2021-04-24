<template>
  <div id="home">
      <navbar class="nav-home">
        <slot slot="center">购物街</slot>
        <div class="swiper">
          <img :src="imgs[index]" alt="">
        </div>
      </navbar>
 </div>
</template>

<script>
// 引入navbar
import navbar from 'components/common/navbar/navbar';
// 获取请求的数据
import {getHomeMultidata} from 'network/home.js';
export default {
  name: '',
  data(){
    return {
      result:null,
      imgs:[
                'https://img.alicdn.com/imgextra/i3/2206686532409/O1CN01NhvhRk1TfMnM9nNwz_!!2206686532409-0-lubanimage.jpg',
                'https://img.alicdn.com/imgextra/i1/2206686532409/O1CN01ZPdEzL1TfMnS0zTq6_!!2206686532409-0-lubanimage.jpg',
                'https://img.alicdn.com/imgextra/i4/2206686532409/O1CN01xlZqeB1TfMnMGW57t_!!2206686532409-0-lubanimage.jpg',
                'https://aecpm.alicdn.com/simba/img/TB15tIjGVXXXXcoapXXSutbFXXX.jpg',
                'https://img.alicdn.com/imgextra/i2/2206686532409/O1CN01N6d6FT1TfMnHBDYPs_!!2206686532409-0-lubanimage.jpg'
      ],
      index:0
    }
  },
  components:{
    navbar
  },
  created(){//实例化之后
  setInterval(() => {
    this.index=this.index%this.imgs.length;
  }, 1000);
    // 获取数据
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