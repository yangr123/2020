<template>
  <div>
    <div class="fix">
      <div class="title">
        <div class="close" @click="close">关闭</div>
        <router-link to="/index">
          <img src="../../assets/img/back3.png" @click="$router.back(-1)" />
        </router-link>
        <span>门票</span>
      </div>
      <div class="desc">
        <router-link to="/list/1"
          ><span :index="1" @click="choose" :class="{ bgc }">
            展馆展览</span
          ></router-link
        >
        <router-link to="/list/2">文化古迹</router-link>
        <router-link to="/list/3">主题乐园</router-link>
        <router-link to="/list/4">自然风光</router-link>
        <router-link to="/list/5">温泉泡汤</router-link>
      </div>
    </div>
    <div style="margin-top: 82px">
      <router-view></router-view>
    </div>
    <!-- 引入回到顶部模块 -->
    <toTop></toTop>
  </div>
</template>
<script>
import toTop from "../../views/toTop";
export default {
  components: { toTop },
  data() {
    return {
      index: 0,
      bgc: false,
    };
  },
  methods: {
    close() {
      this.$router.push("/index");
    },
    choose() {
      if (this.index == 1) {
        this.bgc = true;
      }
      console.log(this.index);
    },
  },
  mounted() {
    //  this.close();
  },
};
</script>
<style scoped>
.bgc {
  background-color: #ddd;
}
.fix {
  position: fixed;
  top: -10px;
  width: 100%;
  background-color: #fff;
  padding-top: 10px;
}
.desc {
  padding: 0 0.625rem 0.3rem 0.625rem;
  display: flex;
  justify-content: space-around;
  /* border: 1px solid #000; */
  background-color: #fff;
}
.desc a {
  padding: 1px;
  color: #000;
  display: inline-block;
  border-bottom: 1px solif #ddd;
  margin: 5px 2px;
}
.title {
  color: #333;
  text-align: center;
  padding: 0 0 10px 10px;
  /* border: 1px solid #000; */
}
.title .close {
  padding-top: 3px;
}
.title span {
  display: block;
  font-size: 22px;
  /* margin-top: 10px; */
}
.close {
  color: #888;
  position: absolute;
  font-size: 18px;
  left: 40px;
  top: 21px;
}
.title img {
  /* display: flex; */
  /* position: absolute; */
  top: 23px;
}
</style>
