<template>
       <div class="tab-bar-item" @click="itemclick">
           <div v-if="!color">
               <slot name="item-icon"></slot>
           </div>
           <div v-else>
               <slot name="item-color"></slot>
           </div>
        </div>
</template>

<script>
export default {
  name: '',
  data(){
      return {
          
      }
  },
  props:{
    path:String
  },
  computed:{
    color(){
      return this.$route.path.indexOf(this.path)!=-1
    }
  },
  methods:{
    itemclick(){
      this.$router.replace(this.path);
    }
  }
}
</script>

<style scoped>
.tab-bar-item {
  text-align: center;
  height: 49px;
  background: #f6f6f6;
}
.tab-bar-item div {
    height: 100%;
}
.tab-bar-item img{
  width: 100%;
  height: 100%;
}
</style>