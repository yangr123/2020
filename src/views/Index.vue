<template>
  <div id="app">
    <!-- 顶部搜索栏以及热搜 -->
    <div class="header">
      <p class="header_title">花花门票</p>
      <!-- 搜索框开始 -->
      <div class="inp">
        <div class="inpL">
          <img src="../assets/img/line.png" />
          西安
        </div>
        <div class="inpR" @click="sec">
          <img src="../assets/img/search1.png" />
          <span>陕西历史博物馆</span>
        </div>
      </div>
      <!-- 搜索框结束 -->
      <!-- 热搜开始 -->
      <div class="hotSec">
        <p>热搜</p>
        <router-link to="/details/35">
          <span>金龙峡风景区</span>
        </router-link>
        <router-link to="/details/1">
          <span>陕西历史博物馆</span>
        </router-link>
        <router-link to="/details/6">
          <span>西安碑林博物馆</span>
        </router-link>
      </div>
      <!-- 热搜结束 -->
    </div>
    <!-- 模块分类 -->
    <div class="sc_sort">
      <ul>
        <li v-for="(item, index) of sort" :key="index">
          <router-link :to="`/list/${item.so_id}`" class="sortCol">
            <img :src="require('../assets/img/' + item.so_img)" />
            <p>{{ item.so_name }}</p>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- 模块分类结束 -->
    <!-- 顶部搜索栏以及热搜结束 -->
    <!-- 轮播图模块 -->
    <div class="swipe">
      <mt-swipe :auto="4000" :speed="800">
        <mt-swipe-item
          v-for="(item, index) of picList"
          :key="index"
          v-show="n == index"
        >
          <img :src="require('../assets/img/carousel/' + item.ca_img)" alt />
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 轮播图模块结束 -->
    <!-- 必玩模块 -->
    <div>
      <!-- <div class="play_title"> -->
      <!-- <mt-cell
          style="margin: 10px; font-weight: bold"
          title="西安必玩"
          to="/list/1"
          >更多 ></mt-cell
        > -->
      <div class="play_title">
        <div>西安必玩</div>
        <div><router-link to="/list/1"> 更多></router-link></div>
      </div>
      <!-- </div> -->
      <div class="P">
        <div class="play">
          <!-- <router-link to="/list"> -->
          <div class="top1" v-for="(item, index) of playList" :key="index">
            <router-link :to="`/details/${item.de_id}`">
              <div class="img">
                <img :src="require('../assets/img/' + item.p_img)" />
              </div>
              <em>{{ item.p_rank }}</em>
              <p>{{ item.p_name }}</p>
              <span>{{ item.p_dt }}</span>
            </router-link>
          </div>
          <!-- </router-link> -->
        </div>
      </div>
      <!-- 必玩模块结束 -->
      <!-- 为你心选  引入list_container模块-->
      <p style="margin: 10px 20px; margin-top: 0; font-weight: bold">
        为你心选
      </p>
      <div class="list" v-for="(item, index) of list" :key="index">
        <div class="img">
          <router-link :to="`/details/${item.de_id}`">
            <img :src="require('../assets/img/images/' + item.de_img)" />
          </router-link>
        </div>
        <div class="deta">
          <router-link :to="`/details/${item.de_id}`">
            <p>{{ item.de_name }}</p>
          </router-link>
          <router-link :to="`/details/${item.de_id}`">
            <span class="des">{{ item.de_des }}</span>
          </router-link>
          <p>{{ item.de_score }}</p>
          <p class="adult_child">
            <span>成人票</span>
            <span>起</span>
            <span>¥{{ item.adultPri }}</span>
          </p>
          <p class="adult_child">
            <span>儿童票</span>
            <span>起</span>
            <span>¥{{ item.childPri }}</span>
          </p>
        </div>
      </div>
      <!-- 引入底部模块 -->
      <div class="footer" style="margin-bottom: 55px">没有更多了</div>
      <!-- 引入回到顶部模块 -->
      <toTop></toTop>
      <tabbar :select="select"></tabbar>
      <!-- 底部 -->
    </div>
  </div>
</template>
<script>
import tabbar from "../views/Tabbar.vue";
import toTop from "../views/toTop";
export default {
  components: { tabbar, toTop },
  data() {
    return {
      select: "index",
      n: 0,
      sort: [],
      playList: [],
      picList: [],
      list: [],
    };
  },
  methods: {
    sec() {
      this.$router.push("/search");
    },
  },
  mounted() {
    this.axios.get("/sort").then((res) => {
      this.sort = res.data;
      // console.log(this.sort);
    });
    this.axios.get("/play").then((res) => {
      this.playList = res.data;
      // console.log(this.playList);
    });
    this.axios.get("/carousel").then((res) => {
      this.picList = res.data;
    });
    this.axios.get("/list").then((res) => {
      this.list = res.data;
    });
  },
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 150px;
  margin-top: -10px;
  background: url(../assets/img/1600257492.jpg) no-repeat;
  background-size: 100% 100%;
}

.header_title {
  color: #fff;
  font: 20px "Microsoft yahei";
  margin: 10px 0 0 15px;
}

.inp {
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 20px;
  line-height: 30px;
}

.inpL,
.inpR {
  display: block;
  float: left;
  height: 30px;
  background-color: #fff;
}

.inpL {
  padding-left: 30px;
  margin-right: -3px;
  font-size: 14px;
  color: orange;
  width: 20%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}

.inp img {
  float: left;
  position: absolute;
  top: 3px;
}

.inpL img {
  left: 100px;
  top: 3px;
}

.inpR img {
  left: 135px;
  top: 5px;
}

.inpR {
  border-bottom-right-radius: 15px;
  width: 60%;
}

.inpR span {
  padding-left: 55px;
  font-size: 16px;
  color: #b3b3b3;
}

/* 热搜样式 */

.hotSec p,
.hotSec a {
  color: #fff;
  float: left;
  margin-top: 10px;
}

.hotSec p {
  font-size: 12px;
  margin: 13px 15px 20px 35px;
}

.hotSec span {
  border: 1px solid #ed7830;
  padding: 1px 3px;
  border-radius: 8px;
  font-size: 13px;
}

/* 轮播图样式 */

.swipe {
  position: relative;
  width: 95%;
  height: 100px;
  margin: 15px auto;
  border-radius: 6px;
  overflow: hidden;
}

.swipe img {
  width: 100%;
  height: 100px;
  border-radius: 6px;
}

/* 模块样式 */

.sc_sort {
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
}

.sc_sort ul {
  list-style: none;
}

.sc_sort ul li {
  float: left;
  padding: 0.3rem 0.7rem;
  text-align: center;
  font-size: 12px;
  color: #555;
}

.sortCol {
  color: #333;
  text-decoration: none;
}

/* 必玩模块 */

.P {
  /* border: 1px solid #0f0; */
  padding: 10px;
  overflow-x: scroll;
  white-space: nowrap;
}

.play {
  position: relative;
}

.play em {
  color: #333;
  position: absolute;
  top: -1px;
  font-size: 14px;
  background-color: #f9de4a;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 10px;
  padding: 2px 5px 2px 8px;
  font-style: normal;
}

.play .top1 {
  width: 50%;
  height: 155px;
  display: inline-block;
  /* border: 1px solid #f00; */
}

.play .top1 .img {
  width: 94%;
  height: 100px;
  border-radius: 8px;
  /* border: 1px solid #0ff; */
  overflow: hidden;
}

.play .top1 img {
  width: 100%;
}

.play p {
  color: #333;
  padding: 10px 0 6px 4px;
}

.play_title {
  padding: 0 10px;
  width: 100%;
  height: 20px;
}
.play_title div:first-child {
  float: left;
  font-weight: bold;
}
.play_title div:last-child {
  float: right;
}
.play_title div:last-child a {
  color: #489ff7;
}

.P span {
  background-color: #fdf7f2;
  color: #ed7b30;
  display: inline-block;
  margin-top: 2px;
  padding: 2px 4px;
  border-radius: 4px;
  font-size: 13px;
}

.mint-cell-text {
  color: #333;
}

.footer {
  text-align: center;
}
</style>
<style>
@import url("../assets/css/comm.css");
</style>
