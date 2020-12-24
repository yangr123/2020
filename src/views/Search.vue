<template>
 <div class="sec">
  <!-- 顶部开始 -->
  <mt-header title="搜索">
   <img @click="$router.back(-1)" src="../assets/img/back3.png" slot="left" class />
  </mt-header>
  <!-- 顶部结束 -->
  <!-- 搜索框开始 -->
  <div id="input">
   <input type="text" class="input" placeholder="陕西历史博物馆" />
   <img src="../assets/img/search1.png" alt />
   <span @click="$router.back(-1)">取消</span>
  </div>
  <!-- 搜索框结束 -->
  <!-- 热门景点开始 -->
  <div class="hot">
   <div>
    <div class="hot1">
     <img src="../assets/img/tower.png" alt />
     <p>西安必玩</p>
    </div>
    <div class="hot2">
     <router-link to="/details/2">
      <span>秦始皇帝陵博物馆</span>
     </router-link>
     <router-link to>
      <span>长恨歌</span>
     </router-link>
     <router-link to="/details/1">
      <span>陕西历史博物馆</span>
     </router-link>
     <router-link to>
      <span>华清宫</span>
     </router-link>
     <router-link to="/details/18">
      <span>大唐芙蓉园</span>
     </router-link>
     <router-link to="/details/30">
      <span>乐华城欢乐世界</span>
     </router-link>
     <router-link to="/details/28">
      <span>西安华夏文旅海洋世界</span>
     </router-link>
    </div>
   </div>
  </div>
  <!-- 热门景点结束 -->
  <!-- 附近景点开始 -->
  <div class="near">
   <div>
    <div class="near1">
     <img src="../assets/img/dingwei.png" alt />
     <p>附近景点</p>
    </div>
    <div class="near2">
     <router-link to="/details/15">
      <span>大唐西市博物馆</span>
     </router-link>
     <router-link to>
      <span>唐乐宫</span>
     </router-link>
     <router-link to="/details/4">
      <span>高家大院</span>
     </router-link>
     <router-link to="/details/52">
      <span>盛清汤泉</span>
     </router-link>
     <router-link to="/details/16">
      <span>西安城墙风景</span>
     </router-link>
     <router-link to>
      <span>青曲社</span>
     </router-link>
     <router-link to="/details/17">
      <span>西安钟鼓楼</span>
     </router-link>
    </div>
   </div>
  </div>
  <!-- 附近景点结束 -->
 </div>
</template>
<script>
export default {
 methods: {
  back() {
   this.$router.push("/index");
  },
 },
};
</script>
<style scoped>
@import url("../assets/css/search.css");
</style>
